import React, { useState } from 'react'
import { Header } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';


function CustomHeader({navigation}){
    return (
        <Header 
            containerStyle={{backgroundColor:'darkslategrey',width: '100%', borderBottomWidth: 5, marginBottom:'10px' }}
            leftComponent={{ icon: 'menu', color: '#fff', underlayColor: '#3488C0', onPress: () => navigation.dispatch(DrawerActions.openDrawer())}}
            centerComponent={{ 
                text: 'Reser&vas', 
                style: { color: '#fff', fontWeight: 'bold', fontSize: 20},
                onPress: () => navigation.navigate('Home')
            }}
        />
    )
}

export default CustomHeader