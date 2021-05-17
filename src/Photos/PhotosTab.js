import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotosHomeScreen from './PhotosHomeScreen'
import PhotoViewer from './PhotoViewer'
export default function PhotosTab() {

const Stack = createStackNavigator();

return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
          name="PhotosHomeScreen" 
          component={PhotosHomeScreen} 
          options={{ headerShown:false }}
      />
      <Stack.Screen 
        name="PhotoViewer" 
        component={PhotoViewer}
        options={{  headerShown:true,
        title:'Photo Viewer'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
