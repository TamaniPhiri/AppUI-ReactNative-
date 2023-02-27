import { View, Text, Image,TextInput, Keyboard, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import avatar from '../assets/Avatarr.png'
import {Feather} from 'react-native-vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'




const Add = () => {

  const[open,setOpen]=useState(false);
  const[value,setValue]=useState(null);
  const[items,setItems]=useState([
    {label:'Motor Car', value:'motor car'},
    {label:'Motor Cycle', value:'motor cycle'},
    {label:'Truck', value:'Truck'}
  ]);

  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258'}}>

<View style={{paddingBottom:10}}>
      <Text style={{fontSize:24, color:'#EEEEEE',marginVertical:10}}>Add</Text>
    </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}>
      <View style={{width:'100%'}}>

        {/*Image-Upload*/}
          <View  style={{alignItems:'center', paddingTop:15}}>
            <Image source={avatar} style={{height:290}} resizeMode={'contain'}/>
          </View>

          {/*Name-Input*/}
          <View style={{width:'100%', flexDirection:'row', paddingTop:20, justifyContent:'center', alignItems:'center'}}>
            <Feather name='user' style={{color:'#fff',paddingRight:5, fontSize:14}}/>
              <TextInput placeholderTextColor={'#b0c4de'} style={{width:'90%',paddingBottom:1,borderBottomColor:'#fff',borderBottomWidth:0.3,color:'#fff', fontSize:14}} placeholder='Name' required/>
          </View>

          {/*Market-value*/}
          <View style={{width:'100%', flexDirection:'row', paddingTop:20, justifyContent:'center', alignItems:'center'}}>
            <Feather name='plus-square' style={{color:'#fff',paddingRight:5, fontSize:14}}/>
              <TextInput placeholderTextColor={'#b0c4de'} style={{width:'90%',paddingBottom:1,borderBottomColor:'#fff',borderBottomWidth:0.3,color:'#fff', fontSize:14}} placeholder='Market value'/>
          </View>

          {/*Market-value*/}
          <View style={{paddingTop:20}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{backgroundColor:'#b0c4de'}}
              textStyle={{fontWeight:'300'}}
            />
          </View>

          {/*Apply*/}
          <View style={{alignItems:'center', paddingTop:50,width:'100%'}}>
            <TouchableOpacity style={{backgroundColor:'#282A3A', width:'100%', justifyContent:'center', alignItems:'center',borderRadius:5,height:50}} onPress={()=>alert('Please hold on')}>
              <Text style={{color:'#fff'}}>Apply</Text>
            </TouchableOpacity>
          </View>

      </View>
      </TouchableWithoutFeedback> 
    </SafeAreaView>
  )
}

export default Add;