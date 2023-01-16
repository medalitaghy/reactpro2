import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Route from './screen/Route';


const tab = createBottomTabNavigator() ; 
const Stack = createStackNavigator() ; 


export default function App() {

  return (
      <NavigationContainer  >
        <Stack.Navigator >

  <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
  <Stack.Screen name="Route" component={Route} options={{headerShown:false}} />
   
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
