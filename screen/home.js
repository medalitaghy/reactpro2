import { StyleSheet, Text, View,Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
  
    return(
      <View style={styles.container}>
        <Text>Accuille </Text>
        <Button
        title="aller aux login"
        onPress={() => navigation.navigate('Login')}
      />
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
  });