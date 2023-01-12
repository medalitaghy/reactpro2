import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Parameter from './parameter';
import Login from './Login';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';


export default function HomeRoute() {
    const navigation = useNavigation();
    const tab = createBottomTabNavigator() ;
    return(
      
            <tab.Navigator 
            screenOptions={({route}) =>({
              tabBarIcon :({focused,color,size}) => {
                let iconName  ;
                if(route.name == "Home"){
                  iconName = focused? "home":"home-outline" ;
              }else if(route.name == "Parameter"){
                iconName = focused? "settings": "settings-outline" ;
              }else if(route.name == "Login"){
                iconName = focused? "ios-add-circle": "ios-add-circle-outline" ;
              }
            
            return   <Icon name={iconName} size={25} color='blue' />
              },
    
            headerShown:false, 
            tabBarShowLabel:false 
            }) }
            >
            <tab.Screen name="Home" component={Home}/>
            <tab.Screen name="Login" component={Register}/>
            
            <tab.Screen name="Parameter" component={Parameter} />
          </tab.Navigator>
  
 
  ) ;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });