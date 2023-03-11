import { View, Text,TouchableOpacity, FlatList,Image, Switch } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather,MaterialCommunityIcons} from 'react-native-vector-icons';



const DATA=[

  
  {
      id:1,
      status:"Online",
      image:require('../assets/Car1.jpg'),
      icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
      id:2,
      status:"Offline",
      image:require('../assets/Car2.jpg'),
      icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
      id:3,
      status:"Offline",
      image:require('../assets/Car3.jpg'),
      icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
  },
  {
      id:4,
      status:"Online",
      image:require('../assets/Car4.jpg'),
      icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id:5,
    status:"Offline",
    image:require('../assets/Car2.jpg'),
    icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit'
  },
  {
      id:6,
      status:"Offline",
      image:require('../assets/Car3.jpg'),
      icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit'
  },
  {
    id:7,
    status:"Offline",
    image:require('../assets/Car1.jpg'),
    icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit'
  },
  {
    id:8,
    status:"Online",
    image:require('../assets/Car4.jpg'),
    icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
  id:9,
  status:"Offline",
  image:require('../assets/Car2.jpg'),
  icon:<Feather name='radio' style={{color:'#282A3A', fontSize:24}}/>,
  description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
  },
  ]; 


function Assets () {

  const[data,setData]=useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData=async()=>{
    await  fetch('https://web-production-8452.up.railway.app/api/assets')
    .then(res => res.json())
    .then(json=>setData(json));
  }

  return (
    
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258',justifyContent:'center'}}>

        <Text style={{fontSize:24, color:'#EEEEEE', marginVertical:10}}>
          Assets
        </Text>


        <FlatList
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          data={data}
          renderItem={({item})=>(
            <View style={{width:'100%'}}>
              <View style={{flexDirection:'row',paddingVertical:10,elevation:10}}>
                <Image source={{uri:item.image}} style={{width:200,height:200}}/>
                <View>
                  <View style={{justifyContent:'center', paddingHorizontal:10,paddingTop:10,marginTop:15}}>
                    <Text style={{color:'#c0c0c0',paddingBottom:5,fontSize:18}}>{item.description.charAt(0).toUpperCase()+item.description.slice(1)}</Text>
                    <Text style={{color:'#b0c4de',paddingBottom:5,paddingTop:8}}>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</Text>
                  </View>
                  <View style={{flexDirection:'row',paddingHorizontal:10,paddingVertical:8}}>
                    <Feather name="wifi" style={{color:'#00fa9a'}}/>
                    <Text style={{color:'#fff'}}>{item.status}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
    </SafeAreaView>
  
  )
}

export default Assets;