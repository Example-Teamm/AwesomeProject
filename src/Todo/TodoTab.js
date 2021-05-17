import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoHomeScreen from './TodoHomeScreen'
import AddTodoScreen from './AddTodoScreen'
export default function ToDoTab() {

const Stack = createStackNavigator();

return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
          name="TodoHomeScreen" 
          component={TodoHomeScreen} 
          options={{ headerShown:false }}
      />
      <Stack.Screen 
        name="AddTodoScreen" 
        component={AddTodoScreen}
        options={{  headerShown:true,
        title:'Add Note'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
