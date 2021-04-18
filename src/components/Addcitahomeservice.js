import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

const options = [
    {
      value: 'Fail',
    },
    {
      value: 'Dr. Oetker',
    },
    {
      value: 'Geralt de Rivia',
    },
    {
      value: 'Paquito Chocolatero',
    },
  ];

function Addcitahomeservice(){

    return (
        <View style={styles.registerContainer}>
            <div className="row">
            <Card>
            <Card.Title>Añadir cita</Card.Title>
            <Card.Divider/>
            <AutoComplete
                style={{
                width: 200,
                }}
                options={options}
                placeholder="Nombre del usuario"
                onChange = {onChange}
                filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
            <Card.Divider/>
            <Button
                title = "Crear cita"
            />
            </Card>
            </div>
        </View>
    )
}

export default Addcitahomeservice