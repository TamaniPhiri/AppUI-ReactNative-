import { View, Text,Image,ScrollView,Switch,TouchableOpacity, StatusBar } from 'react-native'
import React,{useState} from 'react'
import {Feather,MaterialCommunityIcons} from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Biker from '../assets/Biker.jpg'

const Control = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <SafeAreaView style={{flex:1, paddingHorizontal:10, width:'100%', height:'100%', backgroundColor:'#404258'}}>
      <View style={{justifyContent:'center'}}>

        {/*Header #assets*/}
        <Text style={{fontSize:24, color:'#EEEEEE', marginVertical:10}}>
          Control
        </Text>

        {/*Vehicle Image*/}
        <Image source={Biker} style={{borderRadius:10, width:'100%', height:250}} resizeMode={'contain'}/>

        {/*Details*/}
          <View style={{ borderBottomWidth:0.2, borderBottomColor:'#fff', paddingTop:10, paddingBottom:20}}>

            {/*Status*/}
            <View style={{paddingTop:8, flexDirection:'row',justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name='radio' style={{color:'#00fa9a', fontSize:24}}/>
                  <Text style={{fontSize:16, color:'#c0c0c0', paddingLeft:8, fontWeight:'100'}}>Status</Text>
                </View>
                <View>
                  <Text style={{color:'#00fa9a', fontSize:16, fontWeight:'300'}}>
                    Online
                  </Text>
                </View>
              </View>
            </View>

            {/*Type of Vehicle*/}
            <View style={{paddingTop:8,flexDirection:'row',justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name='truck' style={{color:'#778899', fontSize:24}}/>
                  <Text style={{fontSize:16, color:'#c0c0c0', paddingLeft:8, fontWeight:'100'}}>Mode</Text>
                </View>
                <View>
                  <Text style={{color:'#EEEEEE', fontSize:16, fontWeight:'300'}}>
                    MotorCycle
                  </Text>
                </View>
              </View>
            </View>

            {/*Last Seen*/}
            <View style={{paddingTop:8,flexDirection:'row',justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name='eye' style={{color:'#778899', fontSize:24}}/>
                  <Text style={{fontSize:16, color:'#c0c0c0', paddingLeft:8, fontWeight:'100'}}>
                    Last Seen
                  </Text>
                </View>
                <View>
                  <Text style={{color:'#EEEEEE', fontSize:16, fontWeight:'300'}}>
                    10 miles away
                  </Text>
                </View>
              </View>
            </View>
          {/*End of Details*/}
          </View> 
          
            {/*Buttons*/}
          <View style={{paddingTop:10}}>
            {/*ON-OFF*/}
              <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',width:'100%'}}>
                      <Text style={{color:'#00fa9a',paddingRight:4}}>On</Text>
                      <Text style={{color:'#EEEEEE'}}>/Off</Text>
                  </View>
                  <View style={{marginLeft:-40}}>
                    <Switch
                    trackColor={{false: '#767577', true: '#00fa9a'}}
                    thumbColor={isEnabled ? '#282A3A' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                  </View>
              </View>

              {/*Voice-Call*/}
              <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                <Text style={{color:'#EEEEEE'}}>
                  Voice Call
                </Text>
                <TouchableOpacity>
                  <Feather name="phone" style={{fontSize:24, backgroundColor:'#fff',borderRadius:20,padding:6,color:'#282A3A'}}/>
                </TouchableOpacity>
              </View>

              {/*Live-Location*/}
              <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between',marginTop:12}}>
                <Text style={{color:'#EEEEEE'}}>
                  Live Location
                </Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="navigation-variant-outline" style={{fontSize:24, backgroundColor:'#fff',borderRadius:20,padding:6,color:'#282A3A'}}/>
                </TouchableOpacity>
              </View>

              {/*Delete-Button*/}
              <View style={{width:'100%',alignItems:'center', paddingTop:50}}>
                <TouchableOpacity style={{backgroundColor:'#ff0000',width:'100%',alignItems:'center',height:40,justifyContent:'center',borderRadius:10}} 
                    onPress={()=>alert('Are you sure you want to delete this asset')}
                    >
                  <Text style={{color:'#fff'}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
      </View>
      
    </SafeAreaView>
  )
}

export default Control;