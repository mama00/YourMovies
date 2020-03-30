import React from 'react';

import {SafeAreaView,FlatList,ActivityIndicator} from 'react-native';
import FilmItem from './FilmItem';
import {connect } from 'react-redux'

class Favoris extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <SafeAreaView>
                <FlatList
                data={this.props.favoritesFilm}
                keyExtractor={(data)=>data.id.toString()}
                renderItem={({item}) => <FilmItem film={item} navigation={this.props.navigation}/>}


                />
            </SafeAreaView> 
         )
    }
      
    
}

export default connect((state)=>{return{favoritesFilm:state.favoritesFilm}})(Favoris);