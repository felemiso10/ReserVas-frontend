import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-web-swiper';
import { useNavigation } from '@react-navigation/native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 150,
    maxHeight: 150,
    minWidth: 900,
    maxWidth:900,
    borderWidth: 3,
    borderRadius: 6,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  slide: {
    backgroundColor: 'white',
  },
});

const CatCarousel = ({
  getCategories
}) => {
  const navigation = useNavigation();
  
  function goTo(val) {

    switch (val) {
      case 1:
        getCategories({category:'Medico'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
        break;
    
      case 2:
        getCategories({category:'Psicologo'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
        break;

      case 3:
        getCategories({category:'Mascotas'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
        break;

      case 4:
        getCategories({category:'Spa'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
         })   
      break;

      case 5:
        getCategories({category:'Restaurantes'}).then(res => {
          navigation.navigate('Categorias',{categories:res.value})
        })   
        break;
      case 6:
        getCategories({category:'Estetica'}).then(res => {
          navigation.navigate('Categorias',{categories:res.value})
        })   
        break;

      case 7:
        getCategories({category:'Peluqueria'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
        break;

      case 8:
        getCategories({category:'Gimnasio'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
      break
      case 9:
        getCategories({category:'Excursion'}).then(res => {
          navigation.navigate('Categorias', {categories:res.value})
        })   
        break;
                
      default:
        break;
    }
  }

    return (
        <View style={styles.container}>
        <Swiper loop>
          <View style={[styles.slideContainer,styles.slide]}>
            <TouchableOpacity onPress={() => { goTo(1)}}>
            <Image
                  style={{ width: 100, height: 100,margin:5 }}
                  source={require('../../assets/medico.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { goTo(2)}}>
              <Image
                style={{ width: 100, height: 100,margin:5 }}
                source={require('../../assets/psicologo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { goTo(3)}}>
              <Image
                style={{ width: 100, height: 100,margin:5 }}
                source={require('../../assets/mascotas.png')}
              />
            </TouchableOpacity>

          </View>
          
          <View style={[styles.slideContainer,styles.slide]}>
            <TouchableOpacity onPress={() => { goTo(4)}}>
            <Image
                  style={{ width: 100, height: 100,margin:5 }}
                  source={require('../../assets/spa.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { goTo(5)}}>
              <Image
                    style={{ width: 100, height: 100,margin:5 }}
                    source={require('../../assets/restaurantes.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { goTo(6)}}>
              <Image
                    style={{ width: 100, height: 100,margin:5 }}
                    source={require('../../assets/estetica.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.slideContainer,styles.slide]}>
            <TouchableOpacity onPress={() => { goTo(7)}}>
            <Image
                  style={{ width: 100, height: 100,margin:5 }}
                  source={require('../../assets/peluqueria.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { goTo(8)}}>
            <Image
                  style={{ width: 100, height: 100,margin:5 }}
                  source={require('../../assets/deporte.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { goTo(9)}}>
              <Image
                    style={{ width: 100, height: 100,margin:5 }}
                    source={require('../../assets/ocioAireLibre.png')}
              />
            </TouchableOpacity>
          </View>
         
        </Swiper>
      </View>
    )
}

export default CatCarousel