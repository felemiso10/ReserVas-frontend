import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import { StyleSheet, Text, View, Linking } from 'react-native';
import {Header} from 'react-native-elements';
import PublicRoute from './components/Authentication/PublicRoute'
import PrivateRoute from './components/Authentication/PrivateRoute'
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './scenes/Home'
import Login from './scenes/Login'
import Register from './scenes/Register'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const MainPage = ({
    isLoggedIn
}) => {
    return (
        <Router>
            <SafeAreaView>
                <View style={{justifyContent: 'center'}}>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff'}}
                        centerComponent={{ text: 'Reser&vas', 
                            style: { color: '#fff', fontWeight: 'bold', fontSize: 20}}}
                        rightComponent={{ icon: 'home', color: '#fff', onPress:()=> Linking.openURL('http://localhost:19006/register') }}
                    />
                </View>
                <View style={styles.container}>
                    <Switch>
                        <PrivateRoute 
                            component={Home}
                            path="/"
                            isLoggedIn={isLoggedIn}
                            exact
                        />
                        <PublicRoute 
                            component={Login}
                            path="/login"
                        />
                        <PublicRoute 
                            component={Register}
                            path="/register"
                        />
                        <PrivateRoute 
                            component={() => <Redirect to={"/"} />}
                            path="/"
                            isLoggedIn={isLoggedIn}
                        />
                    </Switch>
                </View>
            </SafeAreaView>
        </Router>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)


        
