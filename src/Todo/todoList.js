import React from 'react'
import {View, FlatList,StyleSheet,Text} from 'react-native'
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';


const TodoList = ({pressHandler}) => {

    const todos = useSelector(state => state.todos)
    return(
        <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                  <TodoItem pressHandler={pressHandler} note={item}/>
              )}
            />
        </View>
    );
}              

export default TodoList;

const styles = StyleSheet.create({
    list: {
        flex:1,
        marginTop: 30,
    }
}); 