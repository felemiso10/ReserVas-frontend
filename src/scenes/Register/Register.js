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
          <Switch
            trackColor={{ false: "#87cefa", true: "#87cefa" }}
            thumbColor={isEnabled ? "#0000cd" : "#0000cd"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
         </View>

         <Text>{isEnabled ?
          <div className="row" >
          <Card>
             <Card.Title>Registrar como servicio</Card.Title>
             <Card.Divider/>
             <Input  placeholder='Name' onChangeText={value => changeUserLoginInfo('name', value)} />
             <Input  placeholder='Password' onChangeText={value => changeUserLoginInfo('password', value)} />
             <Input  placeholder='Email' onChangeText={value => changeUserLoginInfo('email', value)} />
             <Input  placeholder='Address' onChangeText={value => changeUserLoginInfo('address', value)} />
             <Input  placeholder='Phone' onChangeText={value => changeUserLoginInfo('phone', value)} />
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
            <Input  placeholder='Name' onChangeText={value => changeUserLoginInfo('name', value)} />
            <Input  placeholder='Password' onChangeText={value => changeUserLoginInfo('password', value)} />
            <Input  placeholder='Email' onChangeText={value => changeUserLoginInfo('Email', value)} />
            <Input  placeholder='NIF' onChangeText={value => changeUserLoginInfo('NIF', value)} />
            <Input  placeholder='Phone' onChangeText={value => changeUserLoginInfo('Phone', value)} />
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
