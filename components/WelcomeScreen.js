import * as React from 'react';
import { Button, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import globalstyles from '../styles/globalstyles';

export default function WelcomeScreen({ navigation }) {

    const login = useSelector(state => state.login)
    console.log(login.length)
    return (
            <View style={globalstyles.container}>
                <View style={globalstyles.header}>
                    <Text style={globalstyles.boldText}>Welcome to my First App!</Text>
                </View>
                <View>
                <Button 
                    onPress={() => {
                        login.length == 0
                        ? navigation.replace('RegisterScreen')
                        : navigation.replace('HomeScreen')}}
                    color='#A41584'
                    title="Go ahead" >
                </Button>
                </View>
            </View>
    );
}
