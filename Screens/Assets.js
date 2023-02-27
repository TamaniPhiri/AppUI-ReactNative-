import { View, Text,TouchableOpacity, FlatList,Image, Switch } from 'react-native'
import React,{useState} from 'react'
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

  return (
    
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258'}}>
    <View>

    <View style={{paddingBottom:10, marginTop:10}}>
      <Text style={{fontSize:24, color:'#EEEEEE'}}>Assets</Text>
    </View>

      {/*Vehicle Cards*/}
    <FlatList
        contentContainerStyle={{ paddingBottom: 150}}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => 
        <View style={{flexDirection:'row',paddingTop:20}} key={item.id}>

          {/*List Image*/}
          <View>
            <Image source={item.image} resizeMode={'cover'} style={{height:150, width:150, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
          </View>

          {/*List Details*/}
          <View style={{flexDirection:'row', backgroundColor:'#b0c4de', width:'100%', borderTopRightRadius:10, borderBottomRightRadius:10, paddingTop:15}}>

            {/*Status Icon*/}
            <View style={{paddingHorizontal:10}}>
              {item.icon}
            </View>

            <View style={{width:'100%'}}>

              {/*Status*/}
              <Text style={{fontSize:16, paddingTop:3}}>{item.status}</Text>
            
                <View style={{paddingTop:10, width:'100%', paddingRight:20}}>
                  <View style={{justifyContent:'center', width:'40%',alignItems:'center'}}>

                    {/*Description*/}
                  <Text style={{color:'#2f4f4f'}}>{item.description}</Text>

                    {/*Locate Button*/}
                    <TouchableOpacity style={{marginTop:30, backgroundColor:'#282A3A', borderRadius:5, width:'100%'}} onPress={()=>alert('Please Wait for response')}>
                      <Text style={{paddingVertical:6, paddingHorizontal:50,color:'#fff'}}>Locate</Text>
                    </TouchableOpacity>

                  </View>
                </View>
            </View>
          </View>
        </View>
        }
        keyExtractor={item => item.id}
      />

    </View> 
  </SafeAreaView>
  
  )
}

export default Assets;