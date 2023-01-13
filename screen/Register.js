import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, firestore ,firebase } from '../firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [nom, setNom ]= useState('')

  const navigation = useNavigation()

  const ref = firebase.firestore().collection("Etudiant") ;
  

  const addEtudiant = ()=>{
    if(email && email.length >0 && username && username.length >0 &&
      phone && phone.length >0 && nom && nom.length >0 ){
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          email:email,
          username:username,
          phone:phone,
          nom:nom,
          userID:auth.currentUser?.uid,
          createdAt:timestamp
        };
        
        ref.add(data)
        .then(()=>{
          setEmail("");
          setUsername("");
          setPhone("");
          setNom("");
          alert("add succssfly");
          navigation.navigate("Home")
        }).catch((error)=>{
          alert(error) ; 
        })
      }

  }

  

  

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
          
        />
        <TextInput
          placeholder="nom"
          value={nom}
          onChangeText={text => setNom(text)}
          style={styles.input}
          
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="pohne"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={addEtudiant}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})