import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header'
import Calendar from '../../components/Calendar'
import { 
    calcularLunes, 
    getTituloSemana,
    calcularSemanaAnterior,
    calcularSemanaPosterior
} from '../../common/dateFunctions'
import { changeWeek, getAllBookings } from '../../actions/calendar'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';
import * as ImagePicker from 'expo-image-picker'
import Modal from '@material-ui/core/Modal';
import Addcitahomeservice from '../../components/Addcitahomeservice';
import { Card } from 'react-native-elements'
import CustomInput from '../../components/forms/CustomInput'
import {addHoras, changeUserLoginInfo} from '../../actions/user'

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

const HomeEmpresa = ({
    navigation, 
    getAllBookings, 
    changeWeek,
    allBookings,
    selectedDate,
    user,
    changeUserLoginInfo,
    addHoras
}) => {
    const [fecha, setFecha] = useState(calcularLunes(new Date()))
    const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [imagen, setImagen] = useState(null)
    const [downloadURL, setDownloadURL] = useState('')

    useEffect(() => {
        getAllBookings()
    },[])

    useEffect(() => {
        console.log(downloadURL)
    }, [downloadURL])

    useEffect(() => {
        console.log('Semana seleccionada: ', getTituloSemana(fecha))
    }, [fecha])    

    useEffect(() => {
        changeWeek(fecha)
    }, [allBookings])

    useEffect(() => {
        if(selectedDate) {
            setFecha(selectedDate.lunes.fecha)
        }
    }, [selectedDate]) 

    return (
        <View>             
            <Header navigation={navigation}/>             
            <View style={{display: 'flex', justifyContent: 'center'}}>
                <Calendar fecha={fecha} selectedDate={selectedDate} changeWeek={changeWeek} />
            </View>             
            
            <View style={styles.homeCarousel}>               
                <Text>Aqui iria Clientes anteriores</Text>
            </View>             
            {/** 
            <Button onPress={() => openImagePickerAsync(setImagen)} title="Seleccionar imagen" /> 
            <Button onPress={() => subirImagen(imagen, setDownloadURL)} title="Subir imagen" />  
            */}
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <View style={styles.registerContainer}>
                <div className="row">
                <Card>
                <Card.Title>Rellenar cita</Card.Title>
                <Card.Divider/>

                <CustomInput 
                placeholder='Hora de Inicio' 
                onChange={changeUserLoginInfo} 
                idInput='inicioJornada'
                object ={user}
                isRequired = 'true'                  
                />

                <CustomInput 
                placeholder='Hora de Finalización' 
                onChange={changeUserLoginInfo} 
                idInput='finJornada'
                object ={user}
                isRequired = 'true'                  
                />  
               
                <Card.Divider/>
                <Button onPress={() => 
                addHoras({
                    inicioJornada: user.inicioJornada,
                    finJornada: user.finJornada
                },user.username)
                } title="Agregar cita" />
                </Card>
                </div>
            </View>
            </Modal>

              
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings,
    selectedDate: state.calendar.selectedDate,
    user: state.user.user

})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek,
    changeUserLoginInfo,
    addHoras
}

const HomeEmpresaConnected = connect(mapStateToProps, mapDispatchToProps)(HomeEmpresa)

export default HomeEmpresaConnected
export { HomeEmpresa }