import { View, Text,TouchableOpacity, TextInput,Image} from 'react-native'
import React,{useState,useEffect}from 'react'
import map from '../assets/map.png'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const Login = ({navigation}) => {
  
  const auth=getAuth();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[validationMessage,setValidationMessage]=useState('');

  async function login(){
    if(email===''||password===''){
      setValidationMessage('Please fill out the form')
      return;
    }
    try{
      await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate('Welcome')
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
      </View>

      <Text>{validationMessage}</Text>

      {/*Login Button*/}
      <TouchableOpacity style={{backgroundColor:'#808080', paddingHorizontal:10, width:'80%', alignItems:'center', paddingVertical:10, borderRadius:5}} onPress={login}>
          <Text style={{color:'#fff'}}>
            Login
          </Text>
      </TouchableOpacity>

      {/*Don't have an account*/}
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center', paddingTop:15}}>

        <Text style={{color:'#fff'}}>
          Don't have an account ?
        </Text>

          <Text style={{color:'#EEEEEE', textDecorationLine:'underline', paddingLeft:6}}>
            Sign up
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;