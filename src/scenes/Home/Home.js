import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native';
import Addcitahomeservice from '../../components/Addcitahomeservice';
import Header from '../../components/Header'
import Calendar from '../../components/Calendar'
import { 
    calcularLunes, 
    getTituloSemana,
    calcularSemanaAnterior,
    calcularSemanaPosterior
} from '../../common/dateFunctions'
import { changeWeek, getAllBookings,getAllPlanes } from '../../actions/calendar'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';
import * as ImagePicker from 'expo-image-picker'
import Showplanes from '../../components/Showplanes';

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

const Home = ({
    navigation, 
    getAllBookings, 
    changeWeek,
    allBookings,
    selectedDate,
    getAllPlanes,
    categoriaUser,
    token
}) => {
    const [fecha, setFecha] = useState(calcularLunes(new Date()))

    const [imagen, setImagen] = useState(null)
    const [downloadURL, setDownloadURL] = useState('')

    useEffect(() => {
        getAllBookings(),
        getAllPlanes(token)
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
                <Calendar 
                    fecha={fecha} 
                    selectedDate={selectedDate} 
                    changeWeek={changeWeek}
                    categoriaUser={categoriaUser} 
                />
            </View>             
            <View style={styles.homeCarousel}>               
                <CatCarousel></CatCarousel>  
            </View>  

            <View>
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'semi-bold',paddingTop: 30}}>Planes completos</Text>

                <Showplanes></Showplanes>  
            </View>    
            {/** 
            <Button onPress={() => openImagePickerAsync(setImagen)} title="Seleccionar imagen" /> 
            <Button onPress={() => subirImagen(imagen, setDownloadURL)} title="Subir imagen" />  
            */}  
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings,
    selectedDate: state.calendar.selectedDate,
    categoriaUser: state.user.userLogged.categoria,
    token: state.user.userLogged.token
})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek,
    getAllPlanes
}

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeConnected
export { Home }