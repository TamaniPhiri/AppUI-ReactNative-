import { View, Text,TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React,{useState,useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from 'react-native-vector-icons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location'
import { getAuth,signOut } from 'firebase/auth';
import {useAuthentication} from '../Hooks/useAuthentication'

const auth=getAuth();

const Home = ({navigation}) => {

    const{user}=useAuthentication();

    const[location,setLocation]=useState(null);
    const[address,setAddress]=useState();
    const[type,setType]=useState("");
    const[userLocation,setUserLocation]=useState(false)



    const onPressNav=()=>{
        setUserLocation(userLocation===true?false:true)
    }

    const onPressLayer=()=>{
        setType(type==="hybrid"?"standard":"hybrid");
    }


    useEffect(()=>{
        const getPermissions=async()=>{
            let{status}=await Location.requestForegroundPermissionsAsync();
            if(status!== 'granted'){
                console.log('Please grant location permissions');
                return;
            }


            let currentLocation=await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            console.log("Location:");
            console.log(currentLocation)
            
        };
        getPermissions();
    },[]);

    

    const geocode=async()=>{
        const geocodedLocation=await Location.geocodeAsync(address);
        console.log("Geocoded Address:");
        console.log(geocodedLocation);
    }
   

  return (
    <SafeAreaView style={{flex:1}}>

        {/*Map*/}

        <MapView style={{flex:1, zIndex:-1, top:0, left:0, right:0, bottom:0}} 
            mapType={type} 
            showsUserLocation={userLocation}
            showsTraffic={true} 
            showsMyLocationButton={false}
            showsBuildings={true}
            userLocationPriority={"high"}
            userLocationUpdateInterval={1}
            showsCompass={true}
            loadingEnabled={true}
            />
            <Marker
                coordinate={{
                    latitude:-134.6868,
                    longitude:544.5094
                }}/>
           
   
        {/*Layer Container*/}
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={{zIndex:10, paddingHorizontal:10, width:'100%', position:'absolute'}}>

            {/*Search Input*/}

            <View style={{width:'100%', backgroundColor:'#282A3A', borderRadius:8, flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:45, top:55}}>
                <TextInput placeholder='Search..' style={{width:'90%', paddingLeft:12, color:'#fff'}} placeholderTextColor={'#EEEEEE'} value={address} onChangeText={setAddress}/>
                <TouchableOpacity onPress={geocode}>
                    <Feather name='search' style={{paddingRight:12, fontSize:16, color:'#EEEEEE'}}/>
                </TouchableOpacity>  
            </View>

            {/*Layer Icon*/}

            <View style={{position:'absolute', left:'92%', marginTop:200, alignItems:'center', justifyContent:'center'}}>
                <View>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={onPressLayer}>
                        <Feather name='layers' style={{fontSize:20, backgroundColor:'#282A3A', padding:10, borderRadius:20,color:'#EEEEEE'}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/*Location Icon*/}

            <View style={{position:'absolute', marginTop:'100%', left:'91.8%', alignItems:'center', justifyContent:'center'}}>
                <View style={{alignContent:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={onPressNav}>
                        <Feather name='navigation-2' style={{fontSize:20, backgroundColor:'#282A3A', padding:10, borderRadius:20,color:'#EEEEEE', borderWidth:1, borderColor:'#EEEEEE'}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginTop:90}}>
                <Text style={{color:'#fff'}}>Welcome{user?.email}</Text>
                <TouchableOpacity style={{backgroundColor:'#080808'}}
                onPress={()=>signOut(auth)}
                >
                    <Text style={{color:'#fff'}}>Logout</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </TouchableWithoutFeedback>

    </SafeAreaView>  
  );
}

export default Home;