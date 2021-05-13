import React, { useState } from 'react'
import {  View, Switch, StyleSheet , Button, Text, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser, changeUserLoginInfo, registerStore, clearInput } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { render } from 'react-dom';
import Header from '../../components/Header'
import CustomInput from '../../components/forms/CustomInput'
import DatePicker from 'react-native-modern-datepicker';
import { useFocusEffect } from '@react-navigation/native';

import styles from '../../styles/commonStyles'

const Register = ({
  changeUserLoginInfo,
  user,
  registerUser,
  registerStore,
  clearInput,
  navigation
}) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
    const [visibility, setVisibility] = useState(false);

    const [valid, setValid] = React.useState({
      isValidUserForm: true,
      isValidStoreForm: true
    })

    const refName = React.createRef();
    const refPassword = React.createRef();
    const refUsername = React.createRef();
    const refEmail = React.createRef();
    const refSurname = React.createRef();
    const refAddress = React.createRef();
    useFocusEffect(
      React.useCallback(() => {
        return () => {
          //resetAll()
          clearInput()
        };
      }, [])
    );

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

        const fechaModificada = user.date.replaceAll('/', '-')

        registerUser({
          username: user.username,
          password: user.password,
          name: user.name,
          email: user.email,
          date: fechaModificada
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

    function cliente() {
      setIsEnabled(false)
      setValid({
        isValidStoreForm: true,
        isValidUserForm: true
      })
      resetAll()
      refAddress.current.clear();
    }

    function empresa() {
      setIsEnabled(true)
      setValid({
        isValidStoreForm: true,
        isValidUserForm: true
      })
      resetAll()
    }

    function seeCalendar() {
      setVisibility(true);
    }


    function resetAll() {
      console.log("hola?")
      refName.current.clear();
      refPassword.current.clear();
      refSurname.current.clear();
      refUsername.current.clear();
      refEmail.current.clear();
      setVisibility(false)

      if(isEnabled){
        refAddress.current.clear()
      }

      clearInput()
    }

    function goToLogin() {
      resetAll()
      navigation.navigate('Login')
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
                object ={user}
                isRequired = 'true'
                refer = {refUsername} 
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isPasswordInput={true}
                object ={user}
                isRequired = 'true'
                refer = {refPassword}  
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                object ={user}
                isRequired = 'true'
                refer = {refName}  
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                object ={user}
                isRequired = 'true' 
                refer = {refSurname} 
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                object ={user}
                isRequired = 'true'
                refer = {refEmail}  
             />
             <CustomInput 
                placeholder = 'Address'
                onChange = {changeUserLoginInfo}
                idInput = 'address'
                object ={user}
                isRequired = 'true'
                refer={refAddress}
              />
                
             
             <Button onPress={() => storeForm() } title="Registrar" />
             <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
               onPress={() => goToLogin()}
               >
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
                object ={user}
                isRequired = 'true'
                refer = {refUsername}  
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isPasswordInput={true}
                object ={user}
                isRequired = 'true'
                refer = {refPassword}  
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                object ={user}
                isRequired = 'true'
                refer = {refName}  
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                object ={user}
                isRequired = 'true'
                refer = {refSurname}  
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                object ={user}
                isRequired = 'true' 
                refer = {refEmail} 
             />

            {
              /*
               <Input  placeholder='Date' type='date' onBlur = {() => dateVal()} 
               onChangeText={value => changeUserLoginInfo('date', value)} />
   
               <CustomInput 
                   placeholder = 'Date'
                   onChange = {changeUserLoginInfo}
                   idInput = 'date'
                   isValidValue = {valid.isValidDate}
                   validateValue = {dateVal}
                />*/
            }
              {!visibility ? 
              <View style={{marginBottom:15}}>
              <Button title = "Selecciona tu fecha de nacimiento" onPress= {() =>seeCalendar()} />
              </View>
              :
                <View style={{marginBottom:15}}>
                  <DatePicker
                    mode = "calendar"
                    onSelectedChange={date => changeUserLoginInfo('date', date)}
                  />
                </View>
              }

            <Button title="Registrar" onPress={() => 
              userForm()
            } />
            <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
               onPress={() => goToLogin()}>
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
    registerStore,
    clearInput
 }

const RegisterConnected = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterConnected
export { Register }
