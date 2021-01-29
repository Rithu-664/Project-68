import React from 'react'
import {View,TouchableOpacity,Text,TextInput,StyleSheet} from 'react-native'

export default function Login({navigation}){
    return (
            <View>
                <View >
                <TextInput
                    placeholder="Username or Email"
                    style={{
                        paddingVertical:10,
                        paddingLeft:10,
                        paddingRight:140,
                        borderWidth:2,
                        borderRadius:10,
                        marginHorizontal:70,
                        marginVertical:20
                    }}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{
                        paddingVertical:10,
                        paddingLeft:10,
                        paddingRight:140,
                        borderWidth:2,
                        borderRadius:10,
                        marginHorizontal:70,
                        marginVertical:20
                    }}
                />
            </View>

                <View style={{marginHorizontal:800,marginTop:30}}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Social media')}><Text style={styles.loginButtonText}>Login</Text></TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    loginButton:{
        backgroundColor:'powderblue',
        padding:15,
        alignItems:'center',
        borderRadius:5,
        borderWidth:2
    },
    loginButtonText:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'verdana'
    }
})