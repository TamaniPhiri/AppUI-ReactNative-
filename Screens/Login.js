import { View, Text,TouchableOpacity, TextInput,Image,ScrollView,ActivityIndicator} from 'react-native'
import React,{useState,useEffect}from 'react'
import map from '../assets/map.png'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({navigation}) => {
  
  const auth=getAuth();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[validationMessage,setValidationMessage]=useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function login(){
    setIsLoading(true);
    if(email===''||password===''){
      setValidationMessage('Please fill out the form')
      setIsLoading(false);
      return;
    }
    try{
      await signInWithEmailAndPassword(auth,email.trim(),password)
      navigation.navigate('Welcome')
    }
    catch(error){
      let errorMessage = '';
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email address is already in use';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password is too weak';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This user account has been disabled';
        break;
      case 'auth/user-not-found':
        errorMessage = 'User not found';
        break;
      case 'auth/internal-error':
        errorMessage = 'An error ocurred';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      default:
        errorMessage = error.message;
    }
      setValidationMessage(errorMessage)
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView style={{flex:1,backgroundColor:'#282A3A'}} contentContainerStyle={{ alignItems:'center', justifyContent:'center',paddingVertical:100}}>

      {/*Logo*/}
      <View style={{marginBottom:20}}>
        <Image source={map} style={{height:150}} resizeMode={'contain'}/>
      </View>

      {/*Heading*/}
      <View>
        <Text style={{color:'#fff', fontSize:24}}>
          Log in
        </Text>
      </View>

      {/*Email Input*/}
      <View style={{width:'80%',paddingVertical:20}}>
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} 
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
      </View>


      {/*Password Input*/}
      <View style={{width:'80%', paddingBottom:20}}>
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} 
        placeholder="Password" 
        secureTextEntry
        value={password}
        onChangeText={(text)=>setPassword(text)}
        />
        {/*Error Message*/}
        <Text style={{alignItems:'center',color:'#ff0000',marginTop:8}}>{validationMessage}</Text>

      </View>

      {/*Login Button*/}

      {isLoading ? (
        <ActivityIndicator size="large" color="#00fa9a" />
      )
      : (

      <TouchableOpacity style={{backgroundColor:'#808080', paddingHorizontal:10, width:'80%', alignItems:'center', paddingVertical:10, borderRadius:5}} onPress={login}>
          <Text style={{color:'#fff'}}>
            Login
          </Text>
      </TouchableOpacity>
      )
      }

      {/*Don't have an account*/}
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center', paddingTop:15}}>

        <Text style={{color:'#fff'}}>
          Don't have an account ?
        </Text>

          <Text style={{color:'#EEEEEE', textDecorationLine:'underline', paddingLeft:6}}>
            Sign up
          </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Login;