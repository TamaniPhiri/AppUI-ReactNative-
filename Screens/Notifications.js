import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from 'react-native-vector-icons';

const Notifications = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258'}}>
      <ScrollView>

      {/*Notification Header*/}
      <View style={{paddingBottom:10,marginVertical:10}}>
        <Text style={{fontSize:24, color:'#EEEEEE'}}>Notifications</Text>
      </View>

      {/*Notifications List*/}
      <View>

        {/*Notification 1*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:4, justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Feather name='shield' style={{color:'#ffd700', fontSize:20}}/>
              <Text style={{paddingLeft:8, color:'#fff'}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de'}}>
                12:00
              </Text>
            </View>
        </View>

        {/*Notification 2*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:4, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row'}}>
              <Feather name='users' style={{color:'#b0c4de', fontSize:20}}/>
              <Text style={{paddingLeft:8, color:'#fff'}}>Check your recent login activity</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de'}}>
                12:05
              </Text>
            </View>
        </View>

        {/*Notification 3*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:4, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row'}}>
              <Feather name='truck' style={{color:'#00ff00', fontSize:20}}/>
              <Text style={{paddingLeft:8, color:'#fff'}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de'}}>
                13:00
              </Text>
            </View>
        </View>

        {/*Notification 4*/}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.2, paddingBottom:4, justifyContent:'space-between', marginTop:8}}>
            <View style={{flexDirection:'row'}}>
              <Feather name='mail' style={{color:'#afeeee', fontSize:20}}/>
              <Text style={{paddingLeft:8, color:'#fff'}}>Passed the Security task and the geo-fence permissions</Text>
            </View>
            <View>
              <Text style={{color:'#b0c4de'}}>
                15:00
              </Text>
            </View>
        </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications;