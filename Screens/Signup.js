import { View, Text,TouchableOpacity, TextInput,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import map from '../assets/map.png'
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'

const Login = ({navigation}) => {

  const auth=getAuth();

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword, setConfirmPassword]=useState('');
  const[validationMessage, setValidationMessage]=useState('');

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
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      navigation.navigate('Login')
    }
    catch(error){
      setValidationMessage(error.message)
    }
  }

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#282A3A'}}>

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
      </View>

      <Text>{validationMessage}</Text>

      {/*Sign Up Button*/}
      <TouchableOpacity style={{backgroundColor:'#808080', paddingHorizontal:10, width:'80%', alignItems:'center', paddingVertical:10, borderRadius:5}} onPress={createAccount}>
          <Text style={{color:'#fff'}}>
            Sign up
          </Text>
      </TouchableOpacity>

      {/*Have an account?*/}
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center', paddingTop:15}}>

        <Text style={{color:'#fff'}}>
          Already have an account ?
        </Text>

          <Text style={{color:'#EEEEEE', textDecorationLine:'underline', paddingLeft:6}}>
            Log in
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;