import React from 'react';
import {Text, View} from 'react-native';


export default class Apropos extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:20}}>
                Little App for search film and series
            </Text>
            </View>
           
        )
    }
}