import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.film=this.props.route.params.Film;
    }
    render(){
        return (
            <View style={{flexDirection:'row'}}>
                <Image style={{width:40,height:40}} source={{uri:'https://image.tmdb.org/t/p/w300'+this.film.poster_path}}/>
                <Text style={{textAlign:'center',fontSize:20,fontStyle:'italic',fontWeight:'bold',marginLeft:5,marginTop:7,flexWrap:'wrap'}}>
                {this.film.original_title}
            </Text>
            </View>
            
        )
    }
}