import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { getClientes } from '../actions/calendar'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/commonStyles'

import { View, Text,TouchableOpacity,Image } from 'react-native';
import { Button } from '@material-ui/core';

const clientesAnteriores = ({
   getClientes,
   clientesAnteriores
}) => {

    useEffect(() => {
        getClientes()
    },[])

    const navigation = useNavigation();
    console.log(clientesAnteriores)
    return (
            <View style={styles.showPlanes}>
                    {
                        clientesAnteriores.map((cliente) => (
                        <View style={{paddingLeft:30,paddingTop:40}}>
                          <Card style = {{padding:15,width:450,height:130, display:'flex',alignItems:'center'}}>
                           <Image
                              style={{ width: 100, height: 100,margin:5,borderRadius:50 }}
                              source={{ uri: cliente.img }}
                              />
                            <Text style={{fontSize:18,fontWeight:400, marginLeft:10, marginRight:5}}>
                                {cliente.nombre}
                            </Text>
                            <Text style={{fontSize:18,fontWeight:400}}>
                                {cliente.apellidos}
                            </Text>
                        
                            <Button style={{marginLeft:30,border:1}}>
                               añadir cita
                           </Button>
                           </Card>
                        </View>
                      ))
                        }
            </View>
    )
}

const mapStateToProps = state => ({
    clientesAnteriores: state.calendar.clientesAnteriores
})

const mapDispatchToProps = {
    getClientes
}

const clientesAnterioresConnected = connect(mapStateToProps, mapDispatchToProps)(clientesAnteriores)

export default clientesAnterioresConnected
export { clientesAnteriores }