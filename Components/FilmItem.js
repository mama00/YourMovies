import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

class FilmItem extends React.Component{

    openFilm(){
        this.props.navigation.navigate('DetailFilm',{Film:this.props.film});
    }
    
    displayFavoriteImage() {
        let sourceImage=require('../images/heart.png')
        if (this.props.favoritesFilm.findIndex(item => item.id === this.props.film.id) !== -1) {
        // Film dans nos favoris
        sourceImage = require('../images/heart-black.png')
        }
        return (
        <Image
            style={styles.favorite_image}
            source={sourceImage}
        />
        )
    }
    render(){
        const film=this.props.film;

        return(
            <TouchableOpacity style={styles.main} onPress={()=>{this.openFilm()}}>
                <View style={styles.leftComp}> 
                    <Image style={styles.image} source={{uri:'https://image.tmdb.org/t/p/w300'+film.poster_path}}/>
                </View>

                <View style={styles.rightComp}>
                    <View style={styles.Header}>
                        {this.displayFavoriteImage()}
                        <Text style={styles.title}>
                            {film.title}
                        </Text>

                        <Text style={styles.vote}>
                            {film.vote_average}
                        </Text>
                    </View>

                    <View style={styles.description}>
                        <Text numberOfLines={6}>
                            {film.overview}
                        </Text>
                        
                    </View>

                    <Text style={styles.sortie}>
                        {film.release_date}
                    </Text>
                        
                   
                </View>

            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    main:{
        height:190,
        flexDirection:'row',
        marginTop:10
    },
    leftComp:{
        flex:2,
        height:190
    },
    rightComp:{
        flex:5,
        backgroundColor:'gray'

    },
    Header:{
        flexDirection:'row'
    },
    Footer:{
        
    },
    title:{
        flex:4,
        fontSize:18,
        flexWrap:'wrap',
        fontWeight:'bold'

    },
    vote:{
        flex:1,
        fontSize:18,
        fontWeight:'bold'

    },
    description:{
    },
    sortie:{
        textAlign:'right',
        marginTop:2,
        fontWeight:'bold'
    },
    image:{
        flex:1
    },
    favorite_image:{
        width:20,
        height:20
    }
})

export default connect((state)=>{return {favoritesFilm:state.favoritesFilm}})(FilmItem);