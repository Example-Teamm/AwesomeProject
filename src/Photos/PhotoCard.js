    import React, { Component } from 'react'
import { Image, 
         View, 
         Text,
         StyleSheet, 
         TouchableHighlight } from 'react-native'

export default class PhotoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: {uri:"https://live.staticflickr.com/"
        +this.props.photo.server+"/"
        +this.props.photo.id+"_"
        +this.props.photo.secret+"_w.jpg"},
    }
  }
  
  imageStyle = () => {
    switch (this.props.numColumns) {
        case 1:
            return styles.image1   
        case 2:
            return styles.image2
    } 
  }

  render() {
    return(
      <TouchableHighlight>
          <View style={styles.imageContainer}>
            <Image key={this.imageStyle()}
                style={this.imageStyle()}           
                source={this.state.imageURL}/>
            </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer:{
    alignItems: 'center',
    backgroundColor:'white',
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal:10,
    
  },
  image2: {
    height: 150, 
    width: '50%',    
  }, 
  image1: {
    height: 300, 
    width: '100%',    
  }, 
  title: {
    fontSize: 25, 
    fontWeight: '900', // 100 - 900
    color: 'black'
  }, 
  description: {
    fontSize: 25, 
    color: 'orange', 
    fontWeight: '600'
  }
})