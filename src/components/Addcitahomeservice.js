import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View } from 'react-native';
import styles from '../styles/commonStyles'
import { TimePicker,DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

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
            </Card>
            </div>
        </View>
    )
}

export default Addcitahomeservice