import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth,firebase } from '../firebase'

export default function Parameter(){

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
    const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <Text>Parameter </Text> 
        <Button
        title="allez aux Accuille"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={styles.subcontainer} >
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>

      </TouchableOpacity>
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subcontainer: {
     // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  });