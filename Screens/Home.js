import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import {Feather} from 'react-native-vector-icons'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', paddingTop:40}}>
        <View style={{justifyContent:'space-between', width:'100%', flexDirection:'row', paddingHorizontal:20, alignItems:'center'}}>
            <View>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                    <Feather name="menu" style={{fontSize:24}}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Hello</Text>
            </View>
        </View>
    </View>
  )
}

export default Home;