import React from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import PopupMenu from '../../components/PopupMenu'

export default function Header({onPopupEvent, searchButtonPressed}) {
  

  const [text,setText] = React.useState("")
  
  const search = () => {
    if(text=='' || text == undefined || text == null) return

    searchButtonPressed(text);
    setText('');
    Keyboard.dismiss()
  }

  return (
    <View style={styles.header}>
        <View style={styles.searchBar}>
            <TextInput
            style={styles.input}
            value={text}
            placeholder='enter your search'
            textAlign={'center'}
            autoCorrect={false}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={search}
            />
            <TouchableOpacity style={styles.searchIcon} onPress={search}>
                <Icon  name='search' size={25} color='white'/>   
            </TouchableOpacity>
        </View> 
        <PopupMenu style ={{flex:3}} actions={['One', 'Two','Three','Four']} onPress={onPopupEvent}  />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    height: 50,
    paddingVertical: 5,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems:'center',
    paddingRight:10
  },
  searchBar:{
      flexDirection:'row',
       justifyContent:'flex-start', 
       paddingStart:10,
       alignItems:'center',
      flex:7
  },
  input: {
    width:'85%',
    backgroundColor:'white',  
    height: 40, 
    fontSize: 15,
  },
  searchIcon: {
    paddingLeft:15
  } 

});