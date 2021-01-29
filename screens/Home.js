import React, { Component } from 'react'
import {TouchableOpacity,Text,View} from 'react-native'

export function Home ({navigation}) {

        return (
                <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'#e0d6ff',padding:15,alignItems:'center',borderWidth:3,borderRadius:10,marginHorizontal:'40%'}} onPress={() => navigation.navigate('Login')}><Text >Sign in</Text></TouchableOpacity>
                </View>
        )
    
}

export default Home
