import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TodoItem({ pressHandler, note }) {
  return (
    <View style={styles.item}>
        <View style={{flex:90}}>
        <TouchableOpacity onPress={() => pressHandler(note,'preview')}>
            <Text numberOfLines={1} style={styles.title} >{note.title}</Text>
            <Text numberOfLines={1} style={styles.text}>{note.text}</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex:10}}>
        <TouchableOpacity onPress={() => pressHandler(note,'delete')}> 
            <Icon name={'delete-sweep'} 
            size={20} 
            color="#900"/>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    width:"90%",
    color:'#777',
    fontWeight:'bold',
    fontSize:17,
    marginBottom:5
  },
  text:{
    width:"70%",
    color:'black',
    fontSize:12,
  },
  item: {
    flexDirection:'row',  
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
});