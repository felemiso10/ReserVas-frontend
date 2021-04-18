import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import CustomInput from '../components/forms/CustomInput'

const Addcitahomeservice = ({
  user,
  changeUserLoginInfo
}) => {
 const [valid, setIsEnabled] = React.useState({
     isValidForm: true,
 })

 function loginComp() {
  if(user.name === "" || user.name === undefined ){
       setIsEnabled({isValidForm: false})
  }
  else{
   setIsEnabled({isValidForm: true})

       loginUser({
           name: user.name,
       })

  }
}
 
    return (
        <View style={styles.registerContainer}>
            <div className="row">
            <Card>
            <Card.Title>Añadir cita</Card.Title>
            <Card.Divider/>
            <CustomInput 
              placeholder='Usuario que reservará...' 
              onChange={changeUserLoginInfo} 
              idInput='username'
              object ={user}
              isRequired = 'true'                  
            />  
            <Card.Divider/>
            <Button onPress={() => 
               loginComp()
            } title="Crear cita" />
            </Card>
            </div>
        </View>
    )
}

export default Addcitahomeservice