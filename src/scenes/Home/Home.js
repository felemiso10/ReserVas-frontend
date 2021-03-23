import React, { useState } from 'react'
import { View, Text } from 'react-native';
import Addcitahomeservice from '../../components/Addcitahomeservice';
import Header from '../../components/Header'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';
const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Aqui iria home Calendario</Text>
            <Addcitahomeservice></Addcitahomeservice>
            {
                /*
                 <CatCarousel></CatCarousel>
                */
            }
           
        </View>
    )
}

export default Home;