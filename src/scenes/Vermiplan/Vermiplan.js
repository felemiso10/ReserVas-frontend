import React from 'react'
import { Text, Button,Image} from 'react-native';
import { connect } from 'react-redux'
import { View } from 'react-native';
import Header from '../../components/Header'
import { Card } from 'react-native-elements'
import { realizarCancelacion } from '../../actions/user'

const Vermiplan  = ({
    navigation,
    borraPlan,
    //Route sirve para pasar los paremetros -
    route,
    token
}) => {
  //No se porque guarda plan dentro de plan en lugar de hacer x= x
  const plan = route.params.plan.plan;

 async function cancelar() {    
   
         realizarCancelacion({
             id: plan.id,
             token
         })

         var millisecondsToWait = 900;
          setTimeout(function() {
            navigation.navigate('Home')
          }, millisecondsToWait);

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
            <Button color="red" onPress={() => cancelar()} title="Cancelar" />
            </Card>
          </View>
     </View>
        
    )
}

const mapStateToProps = state => ({
  token: state.user.userLogged.token
})

 const mapDispatchToProps = {
   //Aqui ira el boton para realizar la reserva -
   realizarCancelacion,
 }

const VermiplanConnected = connect(mapStateToProps, mapDispatchToProps)(Vermiplan)

export default VermiplanConnected;
export { Vermiplan }