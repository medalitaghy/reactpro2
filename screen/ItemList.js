import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { firebase } from '../firebase';


function Item ({ nom ,id}) {
const nav = useNavigation(); 

return(
  <View style={styles.item}>
  <Text style={styles.title}>{nom}</Text >
  <TouchableOpacity
     onPress={() => {
      nav.navigate("Update")
     } }
      style={styles.button}
    >
      <Text style={styles.buttonText}>update</Text>

    </TouchableOpacity>
    <TouchableOpacity
      onPress={ async()=>{
          const ref = await firebase.firestore().collection('Etudiant').doc(id).delete()
          ref.then(()=>{
                alert("delete succssfly");
                //navigation.navigate("Home")
              }).catch((error)=>{
                alert(error) ; 
              })
      }
      }
      style={styles.button}
    >
      <Text style={styles.buttonText}>delete</Text>

    </TouchableOpacity>
    <TouchableOpacity
      onPress={ async()=>{
         
      }
      }
      style={styles.button}
    >
      <Text style={styles.buttonText}>details</Text>

    </TouchableOpacity>
</View>
)
 
}

const ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Item nom={item.nom} id={item.id} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
   //backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,
    flexDirection:'row'
    
  },
  title: {
    fontSize: 20,
    color:"black",
    marginRight:50
  },
  button: {
    backgroundColor: '#0782F9',
    width: '20%',
   // padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    //marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ItemList;