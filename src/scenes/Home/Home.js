import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
import Header from '../../components/Header'
import { 
    calcularLunes, 
    getTituloSemana,
    calcularSemanaAnterior,
    calcularSemanaPosterior
} from '../../common/dateFunctions'
import { changeWeek, getAllBookings } from '../../actions/calendar'

const Home = ({
    navigation, 
    getAllBookings, 
    changeWeek,
    allBookings
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

    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Esta es la página de home</Text>
        </View>
    )
}

const mapStateToProps = state => ({
    allBookings: state.calendar.allBookings
})

const mapDispatchToProps = {
    getAllBookings,
    changeWeek
}

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeConnected
export { Home }