import { View, Text,TouchableOpacity, TextInput,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import map from '../assets/map.png'

const Login = () => {
  const navigation=useNavigation();
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
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} placeholder="Email"/>
      </View>

      {/*Password Input*/}
      <View style={{width:'80%', paddingBottom:20}}>
        <TextInput style={{backgroundColor:'#fff', height:35,borderRadius:5, paddingLeft:8,color:'#282A3A'}} placeholder="Password" secureTextEntry/>
      </View>

      {/*Sign Up Button*/}
      <TouchableOpacity style={{backgroundColor:'#808080', paddingHorizontal:10, width:'80%', alignItems:'center', paddingVertical:10, borderRadius:5}} onPress={()=>{navigation.navigate('Welcome')}}>
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