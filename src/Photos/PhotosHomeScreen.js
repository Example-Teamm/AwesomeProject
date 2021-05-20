import React from 'react';
import { StyleSheet, 
         FlatList,
         ToastAndroid,
         View } from 'react-native';
import {connect} from 'react-redux'
import PhotoCard from './PhotoCard'
import Header from './header';
import { fetchPhotos } from '../actions';
 
class PhotosHomeScreen extends React.Component {

    constructor(props) {
    super(props) 
    this.state = {
      photos: this.props.photos,  
      text: '',
      keyword: 'cats',
      numColumns: 1,
      page: 1
    }
  }

   search = (keyword, page) => {
       this.props.fetch(keyword, page)
  }

  onLoadMore = () => {
    let page = this.state.page + 1  
    this.setState({page: page})
    this.search(this.state.keyword, page)
  }

  searchButtonPressed = (text) => {
    this.setState({photos:[],keyword: text, page:1})  
    this.search(text, 1)
   }

  componentDidMount(){
      this.search('cats',1)
  }
  
  onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    switch (index) {
        case 0:
            this.setState({numColumns:1})
            break;
        case 1:
            this.setState({numColumns:2})
            break
        case 2:
            this.setState({numColumns:3})
            break
        case 3:
            this.setState({numColumns:4})
            break        
        default:
            break;
    }
  }

  static whyDidYouRender = true

  render() {
    return (
      <View style={styles.container}>
        <Header onPopupEvent={this.onPopupEvent} 
            searchButtonPressed={this.searchButtonPressed}/>
        <FlatList 
          key={this.state.numColumns}  
          numColumns={this.state.numColumns}  
          data={this.props.photos}
          renderItem={({item}) => <PhotoCard
                                    photo={item}
                                    numColumns={this.state.numColumns}
                                  />}
          keyExtractor={item => item.id}
          onEndReached={this.onLoadMore}
          ref={'listRef'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

function mapStateToProps(state) {
    return {photos:state.photos}
 }
  
function mapDispatchToProps(dispatch) {
    return {
      fetch: (keyword,page) => dispatch(fetchPhotos(keyword,page)) 
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PhotosHomeScreen)  