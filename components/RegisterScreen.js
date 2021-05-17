import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import globalstyles from '../styles/globalstyles';

export default function RegisterScreen({ navigation }) {
    const [name,setName] = React.useState('');
    const [number,setNumber] = React.useState('');
    const [showRegisterScreen, setShowRegisterScreen] = React.useState(true); 
    
    const dispatch = useDispatch()

    if(showRegisterScreen){
      return (
        <View style={styles.container}>
          <Text style={globalstyles.boldText}>Registration</Text>

            <TextInput 
              onChangeText={(val)=>setName(val)}
              style={globalstyles.input}
              value={name}
              placeholder="Name" 
              placeholderTextColor="#003f5c"> 
            </TextInput>
 
          <TextInput 
            onChangeText={(val)=>setNumber(val)}
            keyboardType='phone-pad'
            style={globalstyles.input}
            value={number}
            placeholder="+91 9536023456"
            placeholderTextColor="#003f5c">
          </TextInput>
  
          <TouchableOpacity style={styles.loginBtn}
                  onPress={() =>setShowRegisterScreen(false)}>
            <Text style={styles.loginText}>Done!</Text>
          </TouchableOpacity>
         </View>
      );
    }
    else {
      return (
      <View style={globalstyles.container}>
        <View style={globalstyles.header}>
          <Text style={globalstyles.boldText}>Hello, Mr. {name}!</Text>
          <Text style={globalstyles.boldText}>Your registered number is: </Text>
          <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>{number}</Text>
        </View>
        
        <Button 
          onPress={() => setShowRegisterScreen(true)}
          color='#841584'
          title="Update" >
        </Button>
      
        <Button 
          onPress={() => {
            navigation.replace('HomeScreen')
            dispatch({type:'REGISTER',payload:{name: name, number: number}})
          }}
          color='#841584'
          title="Let's play!" >
        </Button>
      </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
 
    TextInput: {
      flex: 1,
      height: 40,
      width:'60%',
      borderRadius: 30,
      backgroundColor:'blue',
      marginLeft: 20,
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
      backgroundColor: "#FF1493",
    },
  });