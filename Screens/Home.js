import { View, Text, Image, ScrollView, TextInput} from 'react-native';
import React,{useState,useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';



const Home = () => {

    const navigation=useNavigation();

  return (
    <SafeAreaView style={{flex:1}}>

        {/*Map*/}

        <MapView style={{flex:1, zIndex:-1, top:0, left:0, right:0, bottom:0}}/>

        {/*Layer Container*/}
        <View style={{zIndex:10, paddingHorizontal:10, width:'100%', position:'absolute'}}>

            {/*Search Input*/}

            <View style={{width:'100%', backgroundColor:'#282A3A', borderRadius:8, flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:45, top:90}}>
                <TextInput placeholder='Search..' style={{width:'90%', paddingLeft:12}} placeholderTextColor={'#EEEEEE'}/>
                <TouchableOpacity>
                    <Feather name='map-pin' style={{paddingRight:12, fontSize:16, color:'#EEEEEE'}}/>
                </TouchableOpacity>  
            </View>

            {/*Layer Icon*/}

            <View style={{position:'absolute', left:'92%', marginTop:200, alignItems:'center', justifyContent:'center'}}>
                <View>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Feather name='layers' style={{fontSize:20, backgroundColor:'#282A3A', padding:10, borderRadius:20,color:'#EEEEEE'}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/*Location Icon*/}

            <View style={{position:'absolute', marginTop:'100%', left:'91.8%', alignItems:'center', justifyContent:'center'}}>
                <View style={{alignContent:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name='navigation-2' style={{fontSize:20, backgroundColor:'#282A3A', padding:10, borderRadius:20,color:'#EEEEEE', borderWidth:1, borderColor:'#EEEEEE'}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>

    </SafeAreaView>  
  );
}

export default Home;