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
import { changeWeek, citasVacias } from '../../actions/calendar'
import styles from '../../styles/commonStyles'


const Plan  = ({
navigation,
citasVacias, 
changeWeek,
allBookings,
selectedDate,
route,
token
}) => {

  const [fecha, setFecha] = useState(calcularLunes(new Date()))
  const empresa = route.params.empresa.categorie;
 // console.log(empresa.nombreUser)
  const empresaName = empresa.nombreUser;

useEffect(() => {
    citasVacias({empresaName},token)
},[empresaName])

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
            <Card.Title> {empresa.nombreUser} </Card.Title>
            <Image
               style={{ width: 280, height: 220, margin:'auto',marginTop:10}}
               source={{ uri: empresa.img }}
            />
            <Card.Divider/>
            <Text style={{fontSize:18,color:'navy'}}> {empresa.direccion}</Text>
            <Text style={{fontSize:18,color:'navy'}}> {empresa.email} </Text>
            </Card>
          </View>

          <View style={{display: 'flex', justifyContent: 'center',marginTop:20}}>
                <Calendar fecha={fecha} selectedDate={selectedDate} changeWeek={changeWeek} tipo="verEmpresa"/>
          </View>   
     </View>
        
    )
}

const mapStateToProps = state => ({
  allBookings: state.calendar.allBookings,
  selectedDate: state.calendar.selectedDate,
  token: state.user.userLogged.token
})

 const mapDispatchToProps = {
  citasVacias,
  changeWeek,
 }

const PlanConnected = connect(mapStateToProps, mapDispatchToProps)(Plan)

export default PlanConnected;
export { Plan }