import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Snapchat from './Snapchat'
import Twitter from './Twitter'
import {Entypo,FontAwesome5} from '@expo/vector-icons'

var Tab = createBottomTabNavigator();

export class Main extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Facebook" component={Facebook} options={{tabBarIcon:({color,size}) => (
                    <Entypo name="facebook-with-circle" size={26} color={color}/>
                )}}/>
                <Tab.Screen name="Instagram" component={Instagram} options={{
                    tabBarIcon:({color,size}) => (
                        <Entypo name="instagram-with-circle" size={26} color={color}/>
                    )
                }}/>
                <Tab.Screen name="Snapchat" component={Snapchat} options={{
                    tabBarIcon:({color,size}) => (
                        <FontAwesome5 name="snapchat" size={26} color={color}/>
                    )
                }}/>
                <Tab.Screen name="Twitter" component={Twitter} options={{
                    tabBarIcon:({color,size}) => (
                        <Entypo name="twitter-with-circle" size={26} color={color}/>
                    )
                }}/>
            </Tab.Navigator>
        )
    }
}

export default Main
