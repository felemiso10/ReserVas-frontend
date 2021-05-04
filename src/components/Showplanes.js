import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { getAllPlanes } from '../actions/calendar'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { View, Text,TouchableOpacity,Image } from 'react-native';

const Showplanes = ({
    getAllPlanes,
    allPlanes,
}) => {

    useEffect(() => {
        getAllPlanes()
    },[])

    const navigation = useNavigation();
    
    return (
            <View>
                <div className="row">
                    {
                        allPlanes.map((plan) => (
                         <Card>
                                 {/** <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                          
                           <Image
                              style={{ width: 200, height: 200,margin:5 }}
                              source={{ uri: plan.imagen }}
                              />
                            </TouchableOpacity>*/}
                          
                            <Text style={{fontSize: 18, textAlign:"center"}}>
                                {plan.nombre}
                            </Text>
                          </Card>
                      ))
                    }          
               </div>
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