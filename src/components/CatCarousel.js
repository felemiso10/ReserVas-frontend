import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import Swiper from 'react-native-web-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 275,
    maxHeight: 275,
    minWidth:350,
    maxWidth:350,
    borderWidth: 3,
    borderRadius: 6,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    backgroundColor: 'white',
  },
});

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper loop>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat1.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat2.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat3.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat4.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat5.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat6.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat7.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat8.png')}
                />
          </View>
          <View style={[styles.slideContainer,styles.slide]}>
          <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/cat9.png')}
                />
          </View>
        </Swiper>
      </View>
    );
  }
}