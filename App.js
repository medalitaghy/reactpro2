import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screen/home';
import Parameter from './screen/parameter';
import Register from './screen/Register';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';


const tab = createBottomTabNavigator() ; 
const Stack = createStackNavigator() ; 



export default function App() {
  
  return (
      <NavigationContainer  >
        <tab.Navigator 
        screenOptions={({route}) =>({
          tabBarIcon :({focused,color,size}) => {
            let iconName  ;
            if(route.name == "Home"){
              iconName = focused? "home":"home-outline" ;
          }else if(route.name == "Login"){
            iconName = focused? "settings": "settings-outline" ;
          }else if(route.name == "Register"){
            iconName = focused? "ios-add-circle": "ios-add-circle-outline" ;
          }
         
        return   <Icon name={iconName} size={25} color='blue' />
          },

        headerShown:false, 
        tabBarShowLabel:false 
        }) }
        >
        <tab.Screen name="Home" component={Home}/>
        <tab.Screen name="Register" component={Register}/>
        <tab.Screen name="Login" component={Login} />
      </tab.Navigator>

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
