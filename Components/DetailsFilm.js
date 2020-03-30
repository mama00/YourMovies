// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import {connect} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.Film=this.props.route.params.Film;
    this.state = {
      
      isLoading: true
    }
  }

  componentDidMount() {
      this.setState({
        isLoading: false
      })

  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  toogleFavorite(){
    const action={type:'TOOGLE_FAVORITE',value:this.Film}
    this.props.dispatch(action);
}
    displayFavoriteImage() {
        var sourceImage = require('../images/heart.png');
        if (this.props.favoritesFilm.findIndex(item => item.id === this.Film.id) !== -1) {
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
  _displayFilm() {
    const  film  = this.Film
    if (film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri:'https://image.tmdb.org/t/p/w300'+film.poster_path}}
          />
          <TouchableOpacity onPress={()=>{this.toogleFavorite()}} style={{alignItems:'center'}}>
            {this.displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {film.release_date}</Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {film.budget}</Text>
          
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image:{
      height:40,
      width:40,
      alignItems:'center'
  }
})
const mapStateToProps=(state)=>{
    return {favoritesFilm:state.favoritesFilm};
}
export default connect(mapStateToProps)(FilmDetail)