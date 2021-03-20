import React, { useState } from 'react'
import { View, Text } from 'react-native';
import Addcitahomeservice from '../../components/Addcitahomeservice';
import Header from '../../components/Header'

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Addcitahomeservice/>
        </View>
    )
}

export default Home;