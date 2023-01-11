import { StyleSheet, Text, View,Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Parameter(){
    const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <Text>Parameter </Text> 
        <Button
        title="allez aux Accuille"
        onPress={() => navigation.navigate('Home')}
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