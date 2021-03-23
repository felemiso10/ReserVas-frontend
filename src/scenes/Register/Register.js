import React, { useState } from 'react'
import {  View, Switch, StyleSheet , Button, Text, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser, changeUserLoginInfo, registerStore } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { render } from 'react-dom';
import Header from '../../components/Header'
import CustomInput from '../../components/forms/CustomInput'


import styles from '../../styles/commonStyles'

const Register = ({
  changeUserLoginInfo,
  user,
  registerUser,
  registerStore,
  navigation
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
      isValidAddress: true,
      isValidUserForm: true,
      isValidStoreForm: true
    })

    function userForm() {
      if (!user.name || !user.password || !user.username || !user.surname || !user.email || !user.date){
        
        setValid({
          isValidUserForm: false
        })
      }
      else{
        setValid({
          isValidUserForm: true
        })

        registerUser({
          username: user.username,
          password: user.password,
          name: user.name,
          email: user.email,
          date: user.date
        })


      }
    }



    function storeForm() {
      if (!user.name || !user.password || !user.username || !user.surname || !user.email || !user.address){
        setValid({
          isValidStoreForm: false
        })
      }
      else{
        setValid({
          isValidStoreForm: false
        })

        registerStore({
          username: user.username,
          password: user.password,
          name: user.name,
          email: user.email,
          address: user.address
        })


      }
    }



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
           
      }
      else{
           setValid({
               isValidName: true
           })
           
       }
  }

    function cliente() {
      setIsEnabled(previousState => false)
      setValid({
        isValidStoreForm: true,
        isValidUserForm: true
      })
    }

    function empresa() {
      setIsEnabled(previousState => true)
      setValid({
        isValidStoreForm: true,
        isValidUserForm: true
      })
    }




    return (
      <div>
          <Header navigation={navigation}/>      
          <View style={styles.registerContainer}>
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
          <View style={styles.registerContainer}>
          <Text>{isEnabled ?
          <div className="row" >

          <Card>
          <Card.Title>Registrar como empresa</Card.Title>
             <CustomInput 
                placeholder = 'Username'
                onChange = {changeUserLoginInfo}
                idInput = 'username'
                isValidValue = {valid.isValidUsername}
                validateValue = {usernameVal}
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isValidValue = {valid.isValidPass}
                validateValue = {passVal}
                isPasswordInput={true}
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                isValidValue = {valid.isValidName}
                validateValue = {nameVal}
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                isValidValue = {valid.isValidSurname}
                validateValue = {surnameVal}
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                isValidValue = {valid.isValidEmail}
                validateValue = {emailVal}
             />
             <CustomInput 
                placeholder = 'Address'
                onChange = {changeUserLoginInfo}
                idInput = 'address'
                isValidValue = {valid.isValidAddress}
                validateValue = {addressVal}
             />

             <Button onPress={() => storeForm() } title="Registrar" />
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
           

            <CustomInput 
                placeholder = 'Username'
                onChange = {changeUserLoginInfo}
                idInput = 'username'
                isValidValue = {valid.isValidUsername}
                validateValue = {usernameVal}
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isValidValue = {valid.isValidPass}
                validateValue = {passVal}
                isPasswordInput={true}
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                isValidValue = {valid.isValidName}
                validateValue = {nameVal}
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                isValidValue = {valid.isValidSurname}
                validateValue = {surnameVal}
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                isValidValue = {valid.isValidEmail}
                validateValue = {emailVal}
             />


            <Input  placeholder='Date' type='date' onBlur = {() => dateVal()} onChangeText={value => changeUserLoginInfo('date', value)} />

            <CustomInput 
                placeholder = 'Date'
                onChange = {changeUserLoginInfo}
                idInput = 'date'
                isValidValue = {valid.isValidDate}
                validateValue = {dateVal}
             />

            <Button title="Registrar" onPress={() => 
              userForm()} />
            <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
               onPress={() => navigation.navigate('Login')}>
               Sign in
             </Text>
         </Card>
        </div>
      }</Text>
          </View>

      {valid.isValidUserForm || valid.isValidUserForm == undefined  ? null :

      <div>
        <View style ={styles.registerContainer2}>
            <Text style ={{color: "white"}}> Tienes que rellenar todos los campos </Text>
        </View>
      </div>
      }

      {valid.isValidStoreForm || valid.isValidStoreForm == undefined ? null :

        <div>
          <View style ={styles.registerContainer2}>
              <Text style ={{color: "white"}}> Tienes que rellenar todos los campos </Text>
          </View>
        </div>

      }


    </div>
    )
}


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
