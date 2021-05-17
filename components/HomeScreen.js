import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './GameScreen'
import ToDoTab from '../src/Todo/TodoTab';
import PhotosTab from '../src/Photos/PhotosTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:40 }}>
      <Text>Settings!</Text>
      <Button 
            color='#641584'
            onPress={() => navigation.navigate(DetailsScreen)}
            title="Go to Details" >
       </Button>
    </View>
  );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
  
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <NavigationContainer independent={true}>
          <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{ headerShown: false}}
            />
            <SettingsStack.Screen 
              name="DetailsScreen" 
              component={DetailsScreen}
              options={{ headerShown: false}}
            />
          </SettingsStack.Navigator>
        </NavigationContainer>
        );
}


const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{ showIcon: true }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TodoTab') {
              iconName = focused ? 'view-list' : 'view-list-outline';
            } else if (route.name === 'Photos') {
              iconName = focused ? 'cloud-search' : 'cloud-search-outline';
            } else if (route.name === 'GameScreen') {
              iconName = focused ? 'gamepad-square' : 'gamepad-square-outline';
            }
            return  <Icon name={iconName} size={size} color={color} />;
          },
        }
        )}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="TodoTab" 
            component={ToDoTab}
            options={{ tabBarLabel: 'TODO' }}
        />
        <Tab.Screen name="Photos" 
            component={PhotosTab}
            options={{ tabBarLabel: 'Photos!' }}
        />
        <Tab.Screen name="GameScreen" 
            component={GameScreen}
            options={{ tabBarLabel: "Let's play!" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
