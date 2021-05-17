import './wdyr'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import RegisterScreen from './components/RegisterScreen';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import SplashScreen from 'react-native-splash-screen'
const Stack = createStackNavigator();

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="WelcomeScreen" 
              component={WelcomeScreen} 
              options={{ title: 'Welcome' }}
          />
          <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen}
            options={{ title: ''}}
          />
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>  
  </Provider>
  );
}