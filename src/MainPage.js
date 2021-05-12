import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Icon} from 'react-native-elements'

/*
import { BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import { StyleSheet, Text, View, Linking } from 'react-native';
import PublicRoute from './components/Authentication/PublicRoute'
import PrivateRoute from './components/Authentication/PrivateRoute'
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './components/Search'
*/

import Home from './scenes/Home'
import Login from './scenes/Login'
import Register from './scenes/Register'
import HomeEmpresa from './scenes/HomeEmpresa'
import Plan from './scenes/Plan'
import Categorias from './scenes/Categorias'
import VerEmpresa from './scenes/VerEmpresa'

import {
    DrawerContentScrollView,
    DrawerItem, 
    createDrawerNavigator 
} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function SideMenu({props, isLoggedIn}){
    return (
        <DrawerContentScrollView {...props}>

            {
                isLoggedIn &&
                <DrawerItem  label="Home" icon={() => <Icon name='home' type='font-awesome'/>} onPress={() => props.navigation.navigate('Home')} />
            }
            {
                !isLoggedIn &&
                <DrawerItem  label="Login" icon={() => <Icon name='user-circle-o' type='font-awesome'/>}  onPress={() => props.navigation.navigate('Login')}/>
            }
            
        </DrawerContentScrollView>
    )
}

const MainPage = ({
    isLoggedIn,
    categoriaUser
}) => {

    return (
            <Drawer.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"} drawerContent={props => <SideMenu props={props} isLoggedIn={isLoggedIn} />}>
                {
                    isLoggedIn ? (
                        <>
                            <Drawer.Screen name="Home" component={categoriaUser === 'empresa' ? HomeEmpresa : Home}/>
                            <Drawer.Screen name="Plan" component={Plan}  />
                            <Drawer.Screen name="Categorias" component={Categorias} />
                            <Drawer.Screen name="VerEmpresa" component={VerEmpresa}  />

                        </>
                    ) : (
                        <>
                            <Drawer.Screen name="Login" component={Login} />
                            <Drawer.Screen name="Register" component={Register} />
                        </>
                    )
                }

            </Drawer.Navigator>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn,
    categoriaUser: state.user.userLogged.categoria
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)


        
