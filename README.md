const Update = ({ route}) => {
const { docId, parm } = route.params;
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [nom, setNom ]= useState('')
  const [users,setUsers] = useState([])
  const navigation = useNavigation()


  const ref = firebase.firestore().collection("Etudiant").doc(docId) ;

  useEffect(async ()=>{
     ref.onSnapshot(
        (querySnapshot) =>{
        const users = [] ;
            console.log(docId)
            const {email,nom,username,phone} = querySnapshot.data() ;
            setEmail(email)
            setUsername(username)
            setNom(nom)
            setPhone(phone)
          console.log(users)
      }
    )
  },[docId]) ;

  const updateEtudiant = async()=>{
    
    if(email && email.length >0 && username && username.length >0 &&
      phone && phone.length >0 && nom && nom.length >0 ){
        
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
         email,
         username,
         nom,
         phone
        };

       await firestore.collection("Etudiant").doc(docId).update(data)
        .then(()=>{
          setEmail("");
          setUsername("");
          setPhone("");
          setNom("");
          alert("update succssfly");
          //const user= ref.get()
          //console.log(user)
          navigation.navigate("HomeScreen")
        }).catch((error)=>{
          alert(error) ; 
        })
      }


      navigation.navigate("Update",{docId:id,parm:"parm"})




