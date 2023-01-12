import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { auth,firebase } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [users,setUsers] = useState([])
  const ref = firebase.firestore().collection("Etudiant") ;

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
      }
    )
  }, [])
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>

      </TouchableOpacity>
      <View style={{height:"80%", marginTop:20}}>
      <FlatList
      
        data={users}
        numColumns={1}
        renderItem = {({item})=>(
          <Pressable>
            <View>
              <Text> {item.nom}</Text>
              <Text> {item.phone}</Text>
            </View>
          </Pressable>
        )}
        />
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})