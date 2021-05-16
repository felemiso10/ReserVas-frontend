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
import { changeWeek, getAllBookings,getClientes,getCitasEmpresa } from '../../actions/calendar'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';
import * as ImagePicker from 'expo-image-picker'
import ClientesAnteriores from '../../components/ClientesAnteriores'
import Addcitahomeservice from '../../components/Addcitahomeservice';
import { Card } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native';
import Modal from '@material-ui/core/Modal';
import {addHoras, changeUserLoginInfo} from '../../actions/user'
import CustomInput from '../../components/forms/CustomInput'
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
    getCitasEmpresa, 
    changeWeek,
    allBookings,
    selectedDate,
    getClientes,
    categoriaUser,
    user,
    token,
    addHoras,
    changeUserLoginInfo,
    usuarioActual,
    usuarioLogueado
}) => {
    const [fecha, setFecha] = useState(calcularLunes(new Date()))

    const [imagen, setImagen] = useState(null)
    const [downloadURL, setDownloadURL] = useState('')

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useFocusEffect(
        React.useCallback(() => {
            //ComponentWillMount
            getCitasEmpresa(user,token),
            getClientes(user,token)
            return () => {
                //ComponentWillUnmount
            }
        }, [])
    )

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

    function crearHoras() {
        addHoras({
            token:token,
            username:user,
            inicioJornada: usuarioActual.inicioJornada,
            finJornada: usuarioActual.finJornada,
            tiempoServicio:usuarioActual.tiempoServicio
        })
        setOpen(false)
    }

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
            
            <View>
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'semi-bold',paddingTop: 30}}>Clientes Anteriores</Text>               
                <ClientesAnteriores></ClientesAnteriores>
            </View>

            { usuarioLogueado.inicioJornada != null  ? null

                :
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
                object ={usuarioActual}
                isRequired = 'true'                  
                />
                
                <CustomInput 
                placeholder='Tiempo del servicio' 
                onChange={changeUserLoginInfo} 
                idInput='tiempoServicio'
                object ={usuarioActual}
                isRequired = 'true'                  
                />  

                <CustomInput 
                placeholder='Hora de Finalización' 
                onChange={changeUserLoginInfo} 
                idInput='finJornada'
                object ={usuarioActual}
                isRequired = 'true'                  
                />  
               
                <Card.Divider/>
                <Button onPress={() => 
                    crearHoras()
                } title="Agregar cita" />
                </Card>
                </div>
            </View>
            </Modal>
            }
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings,
    selectedDate: state.calendar.selectedDate,
    categoriaUser: state.user.userLogged.categoria,
    user: state.user.userLogged.name,
    token: state.user.userLogged.token,
    usuarioActual: state.user.user,
    usuarioLogueado:state.user.userLogged
})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek,
    getClientes,
    changeWeek,
    getCitasEmpresa,
    addHoras,
    changeUserLoginInfo
}

const HomeEmpresaConnected = connect(mapStateToProps, mapDispatchToProps)(HomeEmpresa)

export default HomeEmpresaConnected
export { HomeEmpresa }