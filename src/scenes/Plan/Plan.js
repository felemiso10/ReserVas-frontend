import React from 'react'
import { Text, Button} from 'react-native';
import { connect } from 'react-redux'
import { View } from 'react-native';
import Header from '../../components/Header'
import { Card } from 'react-native-elements'

const Plan  = ({
    navigation,
    //Route sirve para pasar los paremetros -
    route
}) => {
  //No se porque guarda plan dentro de plan en lugar de hacer x= x
  const plan = route.params.plan.plan;
  console.log(plan)
    return (
      <View>
      <Header navigation={navigation}/>
          <View style={{alignItems:'center',paddingTop:40}} >
          <Card>

            <Card.Title> {plan.nombre} </Card.Title> 
            <Text style={{fontSize:18,color:'gray',flexDirection:'row'}}> {plan.descripcion}</Text>
            <Text style={{fontSize:18,color:'gray',flexDirection:'row'}}> {plan.precioTotal} €</Text>
            <Card.Divider/>
            {
            plan.servicios.map((servicio) => (
            <>
            <Text style={{fontSize:18,color:'navy'}}> {servicio.nombre}</Text>
            <Text style={{fontSize:18,color:'navy'}}>Fecha: {servicio.fecha}  De {servicio.horaInicio} a {servicio.horaFin} </Text>
            <Card.Divider/>
            </>
            ))
            }
            <Button onPress={() => realizarReserva()} title="Reservar" />
            </Card>
          </View>
     </View>
        
    )
}

const mapStateToProps = state => ({

})

 const mapDispatchToProps = {
   //Aqui ira el boton para realizar la reserva -
 }

const PlanConnected = connect(mapStateToProps, mapDispatchToProps)(Plan)

export default PlanConnected;
export { Plan }