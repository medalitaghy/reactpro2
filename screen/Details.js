import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth,firebase } from '../firebase'
import ItemList from './ItemList'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [users,setUsers] = useState([])
  const uid = auth.currentUser.uid ;
  const ref = firebase.firestore().collection("Etudiant").where("userID", "==", `${uid}`)

  useEffect(async ()=>{
    ref.onSnapshot(
      querySnapshot =>{
        const users = []
        querySnapshot.forEach((doc) => {
            const {email,nom,username,phone} = doc.data()
            users.push({
                id:doc.id,
                email,
                nom,
                username,
                phone,
              })
          })
          setUsers(users)
          console.log(users)
      }
    )
  },[])


  return (
    <View style={styles.container}>
      
      <View style={{height:"80%", marginTop:20}}>
      <ItemList items={users} />
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    //alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  
})