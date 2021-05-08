import React, { useEffect } from 'react'
import { Text, Button,Image} from 'react-native';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { getCategories } from '../../actions/calendar'
import Header from '../../components/Header'
import Card from '@material-ui/core/Card';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/commonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Categorias  = ({
  navigation,  
    //Route sirve para pasar los paremetros -
  route
}) => {

  const navigation2 = useNavigation();
  const empres = route.params
  console.log(empres)
  return (
    <View style = {{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
       <Header navigation={navigation}/>
      {
        empres.categories.map((categorie) => (
          <View style={{margin:'auto',paddingTop:40}}>
            <Card style = {{width: 300, paddingTop:5}}>
      
                
              <Text style={{fontSize:22,margin:'auto'}}> {categorie.empresa}</Text>
              <br/>
              <Text style={{fontSize:18,color:'navy',marginLeft:5}}> {categorie.direccion}</Text>
              <br/>
              <Text style={{fontSize:18,color:'navy',marginLeft:5}}> {categorie.nombre}</Text>
              
              <Image
               style={{ width: 240, height: 200, margin:'auto',marginTop:10}}
               source={{ uri: categorie.imagen }}
            />
            <br/>

            <TouchableOpacity onPress={() => navigation2.navigate('Register')}>
            <Text style={{marginLeft:5,marginBottom:5,color:'blue'}}>Ver más (enlace)</Text>
            </TouchableOpacity>

            </Card>
          </View>
        ))
      }
   </View>
      
  )
}

const mapStateToProps = state => ({

})

 const mapDispatchToProps = {
 
   getCategories
 }

const CategoriasConnected = connect(mapStateToProps, mapDispatchToProps)(Categorias)

export default CategoriasConnected;
export { Categorias }