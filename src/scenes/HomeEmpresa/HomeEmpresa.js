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
import { changeWeek, getAllBookings,getClientes } from '../../actions/calendar'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';
import * as ImagePicker from 'expo-image-picker'
import ClientesAnteriores from '../../components/ClientesAnteriores'
import Addcitahomeservice from '../../components/Addcitahomeservice';
import Card from '@material-ui/core/Card';

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
    getClientes
}) => {
    const [fecha, setFecha] = useState(calcularLunes(new Date()))

    const [imagen, setImagen] = useState(null)
    const [downloadURL, setDownloadURL] = useState('')

    useEffect(() => {
        getAllBookings(),
        getClientes()
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
            
            <View>
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'semi-bold',paddingTop: 30}}>Clientes Anteriores</Text>               
                <ClientesAnteriores></ClientesAnteriores>
                
            </View>             
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings,
    selectedDate: state.calendar.selectedDate
})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek,
    getClientes
}

const HomeEmpresaConnected = connect(mapStateToProps, mapDispatchToProps)(HomeEmpresa)

export default HomeEmpresaConnected
export { HomeEmpresa }