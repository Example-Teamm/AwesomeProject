import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {connect,useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../actions';

const AddTodoScreen = ({route, navigation}) => {
  
  const [Title,setTitle] = React.useState(route.params.text!=''?route.params.title : 'Title');
  const [text,setText] = React.useState(route.params.text!=''?route.params.text : 'Your note!');
  const showUpdate  = route.params.text!=''?true:false;
  var key = route.params.id!=''? route.params.id : '';
  const dispatch = useDispatch()

  const onAdd = () =>{
    dispatch(addTodo(Title,text))
    navigation.goBack();
    setText('');
  }  

  
  const onUpdate = () =>{
    console.log(key)
    dispatch(updateTodo(Title,text,key))
    navigation.goBack();
    setText('');
  }  

  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={(val)=>setTitle(val)}
        style={styles.title}
        value={Title}
        maxLength={25}
        placeholder="Title"
        placeholderTextColor='grey'>  
      </TextInput>

      <TextInput 
        onChangeText={(val)=>setText(val)}
        style={styles.text}
        value={text}
        multiline={true}
        maxLength={100}
        placeholder="Type your note....."
        placeholderTextColor='grey'> 
      </TextInput>

      <View style={styles.buttonContainer}>
      <Button 
        color='#641584'
        onPress={onAdd}
        title="Add" />
      <View style={{height:30}}/>
      { showUpdate ? 
        <Button 
          color='#641584'
          onPress={onUpdate}
          title="Update" />
        : null
        }
       </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title:{
    color:'white',
    fontSize: 20,
    borderWidth: 1,
    borderRadius:30,
    marginTop:60,
    borderColor:'grey',
    backgroundColor:'#000',
    paddingStart:40,
    margin:20,
    height:45,
    width:"80%",
    alignItems: "center",
  } ,
  text:{
      color:'white',
      fontSize: 16,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderRadius:30,
      marginTop:40,
      paddingTop:20,
      borderColor:'grey',
      backgroundColor:'#000',
      paddingStart:40,
      margin:20,
      height:200,
      width:"80%",
    },

    buttonContainer:{
      marginTop:50,
      width:'50%',
      alignContent:'space-between',
      justifyContent:'space-evenly'
    }
});

export default connect()(AddTodoScreen)
  