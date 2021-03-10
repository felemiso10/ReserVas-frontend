import React, { useState } from 'react'
import {  View, Switch, StyleSheet , Button, Text, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { render } from 'react-dom';

const Register = ({
  changeUserLoginInfo
}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
  
    return (
      <div>      
          <View style={styles.container}>
          <Text>Cliente</Text>
            <Switch
              trackColor={{ false: "#87cefa", true: "#87cefa" }}
              thumbColor={isEnabled ? "#0000cd" : "#0000cd"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text>Servicio</Text>
          </View>
         <Text>{isEnabled ?
          <div className="row" >
          <Card>
             <Card.Title>Registrar como servicio</Card.Title>
             <Card.Divider/>
             <Input  placeholder='Username' onBlur onChangeText={value => changeUserLoginInfo('name', value)} />
             <Input  placeholder='Password' onBlur onChangeText={value => changeUserLoginInfo('password', value)} />
             <Input  placeholder='Name' onBlur onChangeText={value => changeUserLoginInfo('name', value)} />
             <Input  placeholder='Surname' onBlur onChangeText={value => changeUserLoginInfo('surname', value)} />
             <Input  placeholder='Email'onBlur onChangeText={value => changeUserLoginInfo('email', value)} />
             <Input  placeholder='Address' onBlur onChangeText={value => changeUserLoginInfo('address', value)} />
             <Button onPress={registerUser} title="Registrar" />
             <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
               onPress={() => Linking.openURL('http://localhost:19006/login')}>
               Sign in
             </Text>
          </Card>
         </div>
         :
         <div className="row" >
         <Card>
            <Card.Title>Registrar como cliente</Card.Title>
            <Card.Divider/>
            <Input  placeholder='Username' onBlur onChangeText={value => changeUserLoginInfo('username', value)} />
            <Input  placeholder='Password' onBlur onChangeText={value => changeUserLoginInfo('password', value)} />
            <Input  placeholder='Name' onBlur onChangeText={value => changeUserLoginInfo('name', value)} />
            <Input  placeholder='Surname' onBlur onChangeText={value => changeUserLoginInfo('surname', value)} />
            <Input  placeholder='Email' onBlur onChangeText={value => changeUserLoginInfo('email', value)} />
            <Input  placeholder='Date' onBlur onChangeText={value => changeUserLoginInfo('date', value)} />
            <Button onPress={registerUser} title="Registrar" />
            <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
               onPress={() => Linking.openURL('http://localhost:19006/login')}>
               Sign in
             </Text>
         </Card>
        </div>
      }</Text>

    </div>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });


const mapStateToProps = state => ({
    
})
 const mapDispatchToProps = {
    changeUserLoginInfo
 }

const RegisterConnected = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterConnected
export { Register }
