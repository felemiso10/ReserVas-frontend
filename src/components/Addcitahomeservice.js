import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { TimePicker,DatePicker, AutoComplete } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const options = [
    {
      value: 'Un saludo',
    },
    {
      value: 'Titirí',
    },
    {
      value: 'Ejemplo',
    },
  ];

function Addcitahomeservice(){
    const format = 'HH:mm';
    const dateFormat = 'YYYY/MM/DD';

    return (
        <View style={styles.registerContainer}>
            <div className="row">
            <Card>
            <Card.Title>Añadir cita</Card.Title>
            <Card.Divider/>
            <DatePicker defaultValue={moment} format={dateFormat} />
            <TimePicker defaultValue={moment('14:00', format)} format={format} />
            <AutoComplete
                style={{
                width: 200,
                }}
                options={options}
                placeholder="Nombre del usuario"
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