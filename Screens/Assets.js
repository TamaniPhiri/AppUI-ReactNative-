import { View, Text,TouchableOpacity, FlatList,Image, Switch } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather,MaterialCommunityIcons} from 'react-native-vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeOut, FadeOutUp } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';





function Assets () {

  const[data,setData]=useState([]);
  const[isloading, setIsLoading]=useState(true);

  useEffect(()=>{
    getData();
  },[])

  const getData=async()=>{
    await  fetch('https://web-production-8452.up.railway.app/api/assets')
    .then(res => res.json())
    .then(json=>setData(json));
    setIsLoading(false);
  }

  return (
    
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258',justifyContent:'center'}}>
      {isloading?(<View><ActivityIndicator size={100}/></View>):(<View>

        <Animated.Text entering={FadeInUp} exiting={FadeOutUp} style={{fontSize:24, color:'#EEEEEE', marginVertical:10}}>
          Assets
        </Animated.Text>


        <FlatList
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          data={data}
          renderItem={({item})=>(
            <View style={{width:'100%'}}>
              <View style={{flexDirection:'row',paddingVertical:10,elevation:8}}>
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
        </View>)}
    </SafeAreaView>
  
  )
}

export default Assets;