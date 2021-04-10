import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
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