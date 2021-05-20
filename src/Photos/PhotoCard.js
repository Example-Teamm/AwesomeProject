import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import FastImage from 'react-native-fast-image'
import {  
         View, 
         StyleSheet, 
         TouchableHighlight } from 'react-native'

export default class PhotoCard extends Component {
    constructor(props) {
    super(props) 
    this.imageURL= {uri:"https://live.staticflickr.com/"
        +this.props.photo.server+"/"
        +this.props.photo.id+"_"
        +this.props.photo.secret+"_w.jpg"}

    this.numColumns = this.props.numColumns    
    
    this.height = Number(Dimensions.get('window').height)/this.numColumns
    this.width = Number(Dimensions.get('window').width)/this.numColumns
    switch(this.numColumns){
        case 1:
            this.height -= 200
            this.width -= 60
            break
        case 2:
            this.height -= 150
            this.width -= 45
            break
        case 3:
            this.height -= 80
            this.width -= 35
            break
        case 4:
            this.height -= 40
            this.width -= 35
            break            
    }  
  }  
 
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.photo == nextProps.photo && 
        this.props.numColumns == nextProps.numColumns)
         return false
    else return true
  }

  render() {      
   
    return(
      <TouchableHighlight>
          <View style={styles.imageContainer}>
            <FastImage
                style={{
                    height: this.height,
                    width:this.width
                }}           
                source={this.imageURL}/>
            </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
    imageContainer:{
      alignItems: 'center',
      backgroundColor:'white',
      marginTop: '2%',
      marginBottom: '5%',
      paddingTop: '10%',
      paddingBottom: '5%',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      marginHorizontal:'3%',
    },
    image:{
        width: 150,
        height: 150
    }
  })  