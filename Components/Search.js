import React from 'react';

import {TextInput,View,Button,StyleSheet} from 'react-native';

export default class Search extends React.Component{

    

    rechercher(){
        console.log()
    }
    render(){
        return(
            <View style={styles.main}>
                <TextInput style={styles.input} placeholder='Rechercher'/>
                <Button  style={styles.button} onPress={()=>{}} title='Rechercher'/>
            </View>
            

        )
    }
}

const styles=StyleSheet.create({
    main:{
        flexDirection:'column',
    },
    input:{
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 0,
        paddingLeft: 5,
       
    },
    button:{

    }
})