import React, { useState } from 'react'
import { View, Text } from 'react-native';
import Header from '../../components/Header'
import styles from '../../styles/commonStyles'

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Aqui iria home Calendario</Text>
        </View>
    )
}

export default Home;