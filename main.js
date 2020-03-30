
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator
} from 'react-native';

import FilmItem from './Components/FilmItem'
import {getFilms} from './Components/Api/Api'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={films:[],isLoading:false};
    this.keyword='';
    this.page=0;
    this.totalPage=100;
    
  }
  
  searchFilm(){
    if(this.keyword.length>0){
      this.setState({isLoading:true})
      getFilms(this.keyword,this.page+1).then( (data)=>{
        this.page=data.page
        this.totalPage=data.total_pages
        this.setState({films:[...this.state.films,...data.results],isLoading:false})
      })
    }
    
    
  }
  render(){

  return (
    <SafeAreaView style={{flex:1}}>
      <TextInput  placeholder='Rechercher' onChangeText={(text)=>{this.keyword=text}} onSubmitEditing={()=>{this.searchFilm()}}/>
          <Button   onPress={()=>{this.searchFilm()}} title='Rechercher'/>
      <FlatList
        data={this.state.films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item} navigation={this.props.navigation}/>}
        onEndReachedThreshold={0.5}
        onEndReached={()=>this.searchFilm()}
        />
        {this.state.isLoading ? <ActivityIndicator style={styles.loader} size='large'/> : null}
    </SafeAreaView>
  );
}
}

const styles=StyleSheet.create({
  loader:{
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0
  }
})
export default App;

