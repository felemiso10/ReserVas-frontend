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
import { changeWeek, getAllBookings } from '../../actions/calendar'
import styles from '../../styles/commonStyles'
import CatCarousel from '../../components/CatCarousel';

const Home = ({
    navigation, 
    getAllBookings, 
    changeWeek,
    allBookings,
    selectedDate
}) => {
    const [fecha, setFecha] = useState(calcularLunes(new Date()))
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
                <CatCarousel></CatCarousel>  
                   
            </View>  
            <View style={styles.homeCarousel}>               
                <Addcitahomeservice></Addcitahomeservice>  
                   
            </View>             
            <Text>Aqui iria home PlanesCompletos / Clientes anteriores</Text>
            {/** 
            <Button onPress={() => openImagePickerAsync(setImagen)} title="Seleccionar imagen" /> 
            <Button onPress={() => subirImagen(imagen, setDownloadURL)} title="Subir imagen" />  
            */}  
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings,
    selectedDate: state.calendar.selectedDate
})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek
}

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeConnected
export { Home }