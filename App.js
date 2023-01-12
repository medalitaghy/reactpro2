import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screen/Home';
import Parameter from './screen/parameter';
import Register from './screen/Register';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Route from './screen/Route';


const tab = createBottomTabNavigator() ; 
const Stack = createStackNavigator() ; 


export default function App() {

  return (
      <NavigationContainer  >
        <Stack.Navigator >

        <Stack.Screen name="Login" component={Login}/>
  <Stack.Screen name="Route" component={Route} options={{headerShown:false}}
              />
   
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
