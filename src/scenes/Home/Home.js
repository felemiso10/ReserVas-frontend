import React, { useState } from 'react'
import { View, Text } from 'react-native';
import CatCarousel from '../../components/CatCarousel';
import Header from '../../components/Header'
import styles from '../../styles/commonStyles'

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Aqui iria home Calendario</Text>
            <View style={styles.registerContainer}>
              <CatCarousel></CatCarousel>
            </View>
            <Text>Aqui iria home PlanesCompletos</Text>
        </View>
    )
}

export default Home;