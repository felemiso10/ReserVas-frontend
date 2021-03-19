import React, { useState } from 'react'
import { View, Text } from 'react-native';
import Header from '../../components/Header'

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Esta es la página de home</Text>
        </View>
    )
}

export default Home;