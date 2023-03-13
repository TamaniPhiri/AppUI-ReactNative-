import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from 'react-native-vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeOut, FadeOutUp } from 'react-native-reanimated';

const Notifications = ({navigation}) => {


  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258'}}>
      <Animated.ScrollView entering={FadeInUp} exiting={FadeOutUp}>

      {/*Notification Header*/}
      <View style={{paddingBottom:10,marginVertical:10}}>
        <Text style={{fontSize:24, color:'#EEEEEE'}}>Notifications</Text>
      </View>

      {/*Notifications List*/}
      <View>

        {/*Notification 1*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:10, justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name='shield' style={{color:'#ffd700', fontSize:14}}/>
              <Text style={{paddingLeft:8, color:'#fff',fontSize:12}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de', fontSize:12}}>
                12:00
              </Text>
            </View>
        </View>

        {/*Notification 2*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:10, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name='users' style={{color:'#b0c4de', fontSize:14}}/>
              <Text style={{paddingLeft:8, color:'#fff',fontSize:12}}>Check your recent login activity</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de', fontSize:12}}>
                12:05
              </Text>
            </View>
        </View>

        {/*Notification 3*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:10, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name='truck' style={{color:'#00ff00', fontSize:14}}/>
              <Text style={{paddingLeft:8, color:'#fff',fontSize:12}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de', fontSize:12}}>
                13:00
              </Text>
            </View>
        </View>

        {/*Notification 4*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:10, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name='mail' style={{color:'#afeeee', fontSize:14}}/>
              <Text style={{paddingLeft:8, color:'#fff',fontSize:12}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de', fontSize:12}}>
                15:00
              </Text>
            </View>
        </View>

      </View>
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default Notifications;