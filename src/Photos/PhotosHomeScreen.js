import React from 'react';
import { StyleSheet, 
         FlatList,
         ToastAndroid,
         View } from 'react-native';

import PhotoCard from './PhotoCard'
import { searchPhotos, } from './FlickrAPI'
import Header from './header';
 
export default class PhotosHomeScreen extends React.Component {
  constructor() {
    super() 
    this.state = {
      photos: [], 
      text: '',
      keyword: 'cats',
      numColumns: 1,
      page: 1
    }
  }

  loadData = (results) => {
      if(results.length < 1) {
        ToastAndroid.showWithGravity(
            "NO results found!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
            return
        }
      this.setState({
        photos: results
       })
       console.log(this.state.keyword, this.state.page, 'LOAD-DATA')
       console.log(this.state.photos);
  }

  addData = (results) => {
    console.log(results);
    if(results.length < 1) {
        ToastAndroid.showWithGravity(
            "Reached the end!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
            return
        }
    this.setState({
      photos: [...this.state.photos,...results]
     })
     console.log(this.state.keyword, this.state.page, "ADD-DATA")
     console.log(this.state.photos);
}
   search = (keyword, page) => {
    if(keyword == '') keyword='dogs'  
    searchPhotos(keyword, page)
    .then(this.loadData)
  }

  onLoadMore = () => {
    let page = this.state.page + 1  
    this.setState({page: page})
    searchPhotos(this.state.keyword, page)
    .then(this.addData)
  }

  searchButtonPressed = (text) => {
    this.setState({photos:[],keyword: text, page:1})  
    this.search(text, 1)
   }

  componentDidMount(){
      this.search('cats')
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
        <Header onPopupEvent={this.onPopupEvent} searchButtonPressed={this.searchButtonPressed}/>
        <FlatList 
          key={this.state.numColumns}  
          numColumns={this.state.numColumns}  
          extraData={this.state.refresh}
          data={this.state.photos}
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
  },
  item: {
    fontSize: 25, 
    padding: 10, 
  }, 
  input: {
    backgroundColor: 'grey',
    height: 60, 
    fontSize: 20,
    elevation: 1 
  }, 
  button: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'orange', 
    height: 47, 
  }, 
  buttonText: {
    color: 'white', 
    fontSize: 25, 
    fontWeight: '900', 
  }
});