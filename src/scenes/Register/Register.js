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
import {Picker} from '@react-native-picker/picker';
import styles from '../../styles/commonStyles'


import * as ImagePicker from 'expo-image-picker'

//Funciones para subir imagenes

import firebase from 'firebase/app'
import 'firebase/storage'

async function transformImageToBlob(uri) {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function(e) {
          console.log(e);
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });
    return blob
}

async function subirImagen(localUri, setDownloadURL){
    const blob = await transformImageToBlob(localUri)
    const formato = '.png'
    const nombreImagen = Date.now() + formato
    var downloadURL = ''
    firebase.storage().ref(nombreImagen)
        .put(blob)
        .then(function(snapshot){
            snapshot.ref.getDownloadURL().then(function(url){
                downloadURL = url
                setDownloadURL(url)
                console.log(downloadURL)
            })
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    
}

let openImagePickerAsync = async (setImageFunction) => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to camara roll is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
        base64: true
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    await setImageFunction(pickerResult.uri);
  };

  

////////////////////////////////

const Register = ({
  changeUserLoginInfo,
  user,
  registerUser,
  registerStore,
  clearInput,
  navigation
}) => {
    const [imagen, setImagen] = useState(null)
    const [isEnabled, setIsEnabled] = useState(true);
    const [downloadURL, setDownloadURL] = useState('')
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
    const [visibility, setVisibility] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
  
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
          date: fechaModificada,
          category: user.category
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
          address: user.address,
          category: user.category
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

              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  changeUserLoginInfo('category', itemValue)
                }>
                <Picker.Item label="Medico" value= "Medico" />
                <Picker.Item label="Psicologo" value="Psicologo" />
                <Picker.Item label="Mascotas" value="Mascotas" />
                <Picker.Item label="Spa" value="Spa" />
                <Picker.Item label="Restaurantes" value="Restaurantes" />
                <Picker.Item label="Estetica" value="Estetica" />
                <Picker.Item label="Peluquería" value="Peluqueria" />
                <Picker.Item label="Deporte" value="Psicologo" />
                <Picker.Item label="Ocio al Aire Libre" value="ocioAireLibre" />
              </Picker>

                <br/>
                <Button onPress={() => openImagePickerAsync(setImagen)} title="Seleccionar imagen" /> 
                <br/>
                <Button onPress={() => subirImagen(imagen, setDownloadURL)} title="Subir imagen" />
                <br/>
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
