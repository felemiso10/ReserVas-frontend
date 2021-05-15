import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { getAllPlanes } from '../actions/calendar'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/commonStyles'

import { View, Text,TouchableOpacity,Image } from 'react-native';

const Showplanes = ({
    getAllPlanes,
    allPlanes,
}) => {

    useEffect(() => {
        getAllPlanes()
    },[])

    const navigation = useNavigation();
    console.log(allPlanes,"Es este?")
    return (
            <View style={styles.showPlanes}>
                    {
                        allPlanes.map((plan) => (
                        <View style={{paddingLeft:30,paddingTop:40}}>
                          <Card style = {{padding:15,width:270,height:250}}>
                           <TouchableOpacity onPress={() => navigation.navigate('Plan',{plan : {plan}})}>
                           <Image
                              style={{ width: 225, height: 175,margin:5 }}
                              source={{ uri: plan.imagen }}
                              />
                            </TouchableOpacity>
                            <Text style={{fontSize:18,fontWeight:400}}>
                                {plan.nombre}
                            </Text>
                           </Card>
                        </View>
                      ))
                    }
            </View>
    )
}

const mapStateToProps = state => ({
    allPlanes: state.calendar.allPlanes
})

const mapDispatchToProps = {
    getAllPlanes
}

const ShowplanesConnected = connect(mapStateToProps, mapDispatchToProps)(Showplanes)

export default ShowplanesConnected
export { Showplanes }