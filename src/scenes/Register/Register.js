import React, { useState } from 'react'
import {  View, Switch, StyleSheet , Button, Text, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser, changeUserLoginInfo, registerStore } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { render } from 'react-dom';

const Register = ({
  changeUserLoginInfo,
  user,
  registerUser,
  registerStore
}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
  
    const [valid, setValid] = React.useState({
      isValidName: true,
      isValidPass: true,
      isValidUsername:true,
      isValidSurname: true,
      isValidEmail: true,
      isValidDate: true,
      isValidAddress: true
    })

    function addressVal() {
      if (user.address == "" || user.address == undefined) {
        setValid({
          isValidAddress: false
        })
      }
      else{
        setValid({
          isValidAddress: true
        })
      }
    }

    function dateVal() {
      if (user.date == "" || user.date == undefined){
        setValid({
          isValidDate: false
        })
      }
      else{
        setValid({
          isValidDate: true
        })
      }
    }

    function emailVal() {
      if (user.email == "" || user.email == undefined){
        setValid({
          isValidEmail: false
        })
      }
      else{
        setValid({
          isValidEmail: true
        })
      }
    }

    function surnameVal() {
      if (user.surname == "" || user.surname == undefined){
        setValid({
          isValidSurname: false
        })
      }
      else{
        setValid({
          isValidSurname: true
        })
      }
    }

    function usernameVal() {
      if (user.username == ""){
        setValid({
          isValidUsername: false
        })
      }
      else{
        setValid({
          isValidUsername: true
        })
      }
    }

    function passVal() {
      if (user.password == "" ){
        setValid({

          isValidPass: false
        
        })
      }
      else{
        setValid({

          isValidPass: true
        })
      }
    }
  
    function nameVal() {
      if (user.name == "" ){
           setValid({
               
               isValidName: false
           })
           console.log(valid.isValidName , "el false")
      }
      else{
           setValid({
               isValidName: true
           })
           console.log(valid.isValidName , "el true")
       }
  }

    function cliente() {
      setIsEnabled(previousState => false)
    }

    function empresa() {
      setIsEnabled(previousState => true)
    }


    return (
      <div>      
          <View style={styles.container}>
            <Button
                title = "Cliente"
                onPress={() => cliente()}
            /> 
            <Switch
              trackColor={{ false: "#87cefa", true: "#87cefa" }}
              thumbColor={isEnabled ? "#0000cd" : "#0000cd"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Button
              title = "Empresa"
              onPress={() => empresa()}
          />
          </View>
         <Text>{isEnabled ?
          <div className="row" >
          <Card>
             <Card.Title>Registrar como servicio</Card.Title>
             <Card.Divider/>
             <Input  placeholder='Username' onBlur = {() => usernameVal()} onChangeText={value => changeUserLoginInfo('username', value)} />

              {valid.isValidUsername || valid.isValidUsername == undefined ? null :
                  <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
              }

             <Input  placeholder='Password' secureTextEntry={true} onBlur = {() => passVal()} onChangeText={value => changeUserLoginInfo('password', value)} />
             
             {valid.isValidPass || valid.isValidPass == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             }
             
             <Input  placeholder='Name' onBlur = {() => nameVal()} onChangeText={value => changeUserLoginInfo('name', value)} />

             {valid.isValidName || valid.isValidName == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             } 

             <Input  placeholder='Surname' onBlur = {() => surnameVal()} onChangeText={value => changeUserLoginInfo('surname', value)} />

             {valid.isValidSurname || valid.isValidSurname == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             } 

             <Input  placeholder='Email' onBlur = {() => emailVal()} onChangeText={value => changeUserLoginInfo('email', value)} />

             {valid.isValidEmail || valid.isValidEmail == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             }

             <Input  placeholder='Address' onBlur = {() => addressVal()} onChangeText={value => changeUserLoginInfo('address', value)} />

             {valid.isValidAddress || valid.isValidAddress == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             }

             <Button onPress={() => registerStore({
                username: user.username,
                password: user.password,
                name: user.name,
                surname: user.surname,
                email: user.email,
                address: user.address
             }) } title="Registrar" />
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
            <Input  placeholder='Username' onBlur = {() => usernameVal()} onChangeText={value => changeUserLoginInfo('username', value)} />

            {valid.isValidUsername || valid.isValidUsername == undefined ? null :
              <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
            }

            <Input  placeholder='Password' secureTextEntry={true} onBlur = {() => passVal()} onChangeText={value => changeUserLoginInfo('password', value)} />

            {valid.isValidPass || valid.isValidPass == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
            }

            <Input  placeholder='Name' onBlur = {() => nameVal()} onChangeText={value => changeUserLoginInfo('name', value)} />

            {valid.isValidName || valid.isValidName == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
             } 

            <Input  placeholder='Surname' onBlur = {() => surnameVal()} onChangeText={value => changeUserLoginInfo('surname', value)} />

            {valid.isValidSurname || valid.isValidSurname == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
            } 

            <Input  placeholder='Email' onBlur = {() => emailVal()} onChangeText={value => changeUserLoginInfo('email', value)} />

            {valid.isValidEmail || valid.isValidEmail == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
            }

            <Input  placeholder='Date' onBlur = {() => dateVal()} onChangeText={value => changeUserLoginInfo('date', value)} />

            {valid.isValidDate || valid.isValidDate == undefined ? null :
                <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
            }

            <Button title="Registrar" onPress={() => 
              registerUser({
                username: user.username,
                password: user.password,
                name: user.name,
                email: user.email,
                date: user.date
              })} />
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
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: 'space-around'
    },
    errorMsg: {
      color: "red",
      marginBottom: "10px",
      marginLeft:"10px"
  }
  });


const mapStateToProps = state => ({
    user: state.user.user
})
 const mapDispatchToProps = {
    changeUserLoginInfo,
    registerUser,
    registerStore
 }

const RegisterConnected = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterConnected
export { Register }
