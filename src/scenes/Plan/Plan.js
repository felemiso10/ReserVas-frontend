import React from 'react'
import { Text, Button,Image} from 'react-native';
import { connect } from 'react-redux'
import { View } from 'react-native';
import Header from '../../components/Header'
import { Card } from 'react-native-elements'
import { reservaPlan } from '../../actions/user'

const Plan  = ({
    navigation,
    reservaPlan,
    //Route sirve para pasar los paremetros -
    route,
    user,
    token
}) => {
  //No se porque guarda plan dentro de plan en lugar de hacer x= x
  const plan = route.params.plan.plan;
  console.log(user)
  function realizarReserva() {    
        reservaPlan({
             id: plan.id,
             name: user,
             token
         })
  }
 
    return (
      <View>
      <Header navigation={navigation}/>
          <View style={{alignItems:'center'}} >
          <Card>

            <Card.Title> {plan.nombre} </Card.Title>
            <Card.Divider/>

            <Image
               style={{ width: 280, height: 200,alignSelf:'center' }}
               source={{ uri: plan.img }}
            />
            <Card.Divider/>

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
  user: state.user.userLogged.name,
  token: state.user.userLogged.token
})

 const mapDispatchToProps = {
   //Aqui ira el boton para realizar la reserva -
   reservaPlan,
 }

const PlanConnected = connect(mapStateToProps, mapDispatchToProps)(Plan)

export default PlanConnected;
export { Plan }