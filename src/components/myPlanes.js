import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { getMyPlanes } from '../actions/calendar'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/commonStyles'

import { View, Text,TouchableOpacity,Image } from 'react-native';

const MyPlanes = ({
    allPlanes,
    token,
    user
}) => {

    const navigation = useNavigation();
    
    return (
            <View style={styles.showPlanes}>
                    {
                        allPlanes.map((plan) => (
                        <View style={{paddingLeft:30,paddingTop:40}}>
                          <Card style = {{padding:15,width:270,height:250}}>
                           <TouchableOpacity onPress={() => navigation.navigate('Plan',{plan : {plan}})}>
                           <Image
                              style={{ width: 225, height: 175,margin:5 }}
                              source={{ uri: plan.img }}
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
    allPlanes: state.calendar.myPlanes,
    token: state.user.userLogged.token,
    user: state.user.userLogged.name,
})

const mapDispatchToProps = {
    getMyPlanes
}

const MyPlanesConnected = connect(mapStateToProps, mapDispatchToProps)(MyPlanes)

export default MyPlanesConnected
export { MyPlanes }