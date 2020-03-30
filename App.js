import 'react-native-gesture-handler';
import React from 'react';
import Main from './main';
import Header from './Components/header';
import DetailFilm from './Components/DetailsFilm';
import {NavigationContainer, BaseRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Favoris from './Components/Favoris'
import {Provider} from 'react-redux';
import Store from './Redux/Store'
import { Text,Image, View } from 'react-native';
import Apropos from './Components/Apropos'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends React.Component{
 constructor(props){
   super(props);
   this.renderStack=this.renderStack.bind(this)
   this.renderTab=this.renderTab.bind(this)
   this.renderDrawer=this.renderDrawer.bind(this)
 }

 renderStack(){
  let Stack=createStackNavigator();

   return(
    <Stack.Navigator >
    <Stack.Screen name='HomeStack' component={Main} options={{title:'Rechercher'}}/>
    <Stack.Screen name='DetailFilm' component={DetailFilm} options={({route})=>({headerTitle:props=>{return <Header route={route} {...props}/>}})}/>
    </Stack.Navigator>
   )
 }

 renderTab(){
  let BottomTab=createBottomTabNavigator();
  return(
    <BottomTab.Navigator>

      <BottomTab.Screen name='RechercherTab' component={this.renderStack} options={{tabBarIcon:()=>{return <Image style={{width:20,height
      :20}} source={require('./images/recherche.png')}/>}}}/>

      <BottomTab.Screen name='Favoris' component={Favoris} options={{tabBarIcon:()=>{return <Image style={{width:20,height
      :20}} source={require('./images/fav.png')}/>}}}/>

    </BottomTab.Navigator>
  )
   
 }
 drawerCustom(props){
   
   return(
     <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
       <Image style={{width:80,height:80}} source={require('./images/smiley.png')}/>
       <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=>props.navigation.navigate('RechercherDrawer')}>
        <Text style={{fontWeight:'bold',marginTop:10,fontSize:20}}>Rechercher</Text>
        <Image style={{width:40,height:40}} source={require('./images/recherche.png')}/>
       </TouchableOpacity>

       <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=>props.navigation.navigate('A propos')}>
        <Text style={{fontWeight:'bold',marginTop:10,fontSize:20}}>A propos</Text>
        <Image style={{width:40,height:40,marginTop:10}} source={require('./images/about.png')}/>
       </TouchableOpacity>

      
     </View>
   )
 }
 renderDrawer(){
  let Drawer=createDrawerNavigator();
  return(
    <Drawer.Navigator initialRouteName='RechercherDrawer' drawerContent={(props)=>this.drawerCustom(props)} >
    <Drawer.Screen name="RechercherDrawer" component={this.renderTab} options={{title:'Accueil'}}/>
    <Drawer.Screen name="A propos" component={Apropos} options={{drawerIcon:()=>{return <Image style={{width:20,height:20}} source={require('./images/about.png')}/>}}}/>

    
  </Drawer.Navigator>
  )
  

 }
  render(){
        return(
          <Provider store={Store}>
             <NavigationContainer>
               {this.renderDrawer()}
            </NavigationContainer>
          </Provider>
     
    )
  }
}
