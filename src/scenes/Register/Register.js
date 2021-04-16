import React, { useState } from 'react'
import {  View, Switch, StyleSheet , Button, Text, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser, changeUserLoginInfo, registerStore } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { render } from 'react-dom';
import Header from '../../components/Header'
import CustomInput from '../../components/forms/CustomInput'
import DatePicker from 'react-native-modern-datepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
    const [visibility, setVisibility] = useState(false);


    const [valid, setValid] = React.useState({
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

    function seeCalendar() {
      setVisibility(true);
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
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isPasswordInput={true}
                object ={user}
                isRequired = 'true' 
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                object ={user}
                isRequired = 'true' 
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                object ={user}
                isRequired = 'true' 
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                object ={user}
                isRequired = 'true' 
             />
             <CustomInput 
                placeholder = 'Address'
                onChange = {changeUserLoginInfo}
                idInput = 'address'
                object ={user}
                isRequired = 'true' 
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
                object ={user}
                isRequired = 'true' 
             />

             
             <CustomInput 
                placeholder = 'Password'
                onChange = {changeUserLoginInfo}
                idInput = 'password'
                isPasswordInput={true}
                object ={user}
                isRequired = 'true' 
             />

             <CustomInput 
                placeholder = 'Name'
                onChange = {changeUserLoginInfo}
                idInput = 'name'
                object ={user}
                isRequired = 'true' 
             />

             <CustomInput 
                placeholder = 'Surname'
                onChange = {changeUserLoginInfo}
                idInput = 'surname'
                object ={user}
                isRequired = 'true' 
             />
             <CustomInput 
                placeholder = 'Email'
                onChange = {changeUserLoginInfo}
                idInput = 'email'
                object ={user}
                isRequired = 'true' 
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
