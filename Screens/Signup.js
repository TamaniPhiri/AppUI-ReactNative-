import { ScrollView, View, Text,TouchableOpacity, TextInput,Image,ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'
import map from '../assets/map.png'
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'

const Login = ({navigation}) => {

  const auth=getAuth();

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword, setConfirmPassword]=useState('');
  const[validationMessage, setValidationMessage]=useState('');
  const [isLoading, setIsLoading] = useState(false);

  let validateAndSet=(value, valueToCompare,setValue)=>{
    value!==valueToCompare
    ?setValidationMessage('Passwords do not match')
    :setValidationMessage('')
    setValue(value)
  }
   
  async function createAccount(){
    email===''||password===''
    ?setValidationMessage('Please fill out the form')
    :''
    setIsLoading(true);
    try{
      await createUserWithEmailAndPassword(auth,email.trim(),password);
      navigation.navigate('Login')
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
      case 'auth/missing-email':
        errorMessage = 'Missing Email';
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
    
    <ScrollView style={{flex:1,backgroundColor:'#282A3A'}} contentContainerStyle={{ alignItems:'center', justifyContent:'center',paddingVertical:100}} showsVerticalScrollIndicator={false}>

      {/*Logo*/}
      <View style={{marginBottom:20}}>
        <Image source={map} style={{height:150}} resizeMode={'contain'}/>
      </View>

      {/*Heading*/}
      <View>
        <Text style={{color:'#fff', fontSize:24}}>
          Sign Up
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

      {/*New Password Input*/}
      <View style={{width:'80%', paddingBottom:20}}>
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} 
        placeholder="New Password" 
        secureTextEntry
        value={password}
        onChangeText={(value)=>validateAndSet(value,confirmPassword, setPassword)}
        />
      </View>

       {/*Confirm Password Input*/}
       <View style={{width:'80%', paddingBottom:20}}>
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} 
        placeholder="Confirm Password" 
        secureTextEntry
        value={confirmPassword}
        onChangeText={(value)=>validateAndSet(value,password, setConfirmPassword)}
        />
        <Text style={{alignItems:'center',color:'#ff0000',marginTop:8}}>{validationMessage}</Text>
      </View>

      {/*Sign Up button*/}

      {isLoading ? (
        <ActivityIndicator size="small" color="#00fa9a" />
      )
      : (
      <TouchableOpacity style={{backgroundColor:'#808080', paddingHorizontal:10, width:'80%', alignItems:'center', paddingVertical:10, borderRadius:5}} onPress={createAccount}>
          <Text style={{color:'#fff'}}>
            Sign up
          </Text>
      </TouchableOpacity>
        )
      }

      {/*Have an account?*/}
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center', paddingTop:15}}>

        <Text style={{color:'#fff'}}>
          Already have an account ?
        </Text>

          <Text style={{color:'#EEEEEE', textDecorationLine:'underline', paddingLeft:6}}>
            Log in
          </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Login;