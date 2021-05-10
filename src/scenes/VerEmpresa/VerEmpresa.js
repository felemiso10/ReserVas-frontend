import React, { useState, useEffect } from 'react'
import { View,Text, Image} from 'react-native';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { Card } from 'react-native-elements'
import Calendar from '../../components/Calendar'
import { 
    calcularLunes, 
    getTituloSemana,
    calcularSemanaAnterior,
    calcularSemanaPosterior
} from '../../common/dateFunctions'
import { changeWeek, getAllBookings,getCategories } from '../../actions/calendar'
import styles from '../../styles/commonStyles'


const Plan  = ({
navigation,
getAllBookings, 
changeWeek,
allBookings,
selectedDate,
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
          <View style={{alignItems:'center'}} >
          <Card>
            <Card.Title> La peluquería del Pepe </Card.Title>
             {/**
             *   <Image
               style={{ width: 320, height: 220,alignSelf:'center' }}
               source={{ uri: plan.imagen }}
            />

            */ }
            <Card.Divider/>
            <Text style={{fontSize:18,color:'navy'}}> empresa.direccion supongamos que algo larga</Text>
            <Text style={{fontSize:18,color:'navy'}}> empresa.categoria </Text>
            </Card>
          </View>

          <View style={{display: 'flex', justifyContent: 'center',marginTop:20}}>
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
  changeWeek,
 }

const PlanConnected = connect(mapStateToProps, mapDispatchToProps)(Plan)

export default PlanConnected;
export { Plan }