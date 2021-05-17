import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';
import Header from './header';
import TodoList from './todoList';

const ToDoHomeScreen = ({navigation}) => {
  
  const dispatch = useDispatch();

  const pressHandler = (note, action) =>{
      switch(action){
          case 'preview':
            navigation.navigate('AddTodoScreen',{title:note.title, text:note.text, id:note.id});
            break;      
          case 'delete':
            dispatch(deleteTodo(note.id))
            break
      }
  }


  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Header />
          <TodoList pressHandler={pressHandler} />          
        </View>
        <View style={styles.floatingButton}>
            <TouchableOpacity onPress={()=>navigation.navigate('AddTodoScreen',{'text':'', 'id':''}) }>
              <Icon name='plus-circle' size= {60} color='indigo'/>
            </TouchableOpacity>
        </View>          
      </View>
  );
}

const mapStateToProps = state => ({
  todos: state.todos     
})

export default connect(mapStateToProps)(ToDoHomeScreen) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:8,
    padding: 10,
    position:'relative'
  },
  floatingButton: {
      flex:2,
      alignItems:'flex-end',
      right:45,
      bottom:30,
      position:'absolute',
      elevation:50,
      }
});