import React, { useState } from 'react'
import { connect } from 'react-redux'
import Search from './components/Search'
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
import Plan from './scenes/Plan'

import {
    DrawerContentScrollView,
    DrawerItem, 
    createDrawerNavigator 
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function SideMenu(props){
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem  label="Home" icon={() => <Icon name='home' type='font-awesome'/>} onPress={() => props.navigation.navigate('Home')} />
            <DrawerItem  label="Login" icon={() => <Icon name='user-circle-o' type='font-awesome'/>}  onPress={() => props.navigation.navigate('Login')}/>
        </DrawerContentScrollView>
    )
}

const MainPage = ({
    isLoggedIn
}) => {
    /*
    return (
        <Router>
            <SafeAreaView>
                <View style={{justifyContent: 'center'}}>
                    <Header 
                        containerStyle={{backgroundColor:'darkslategrey',width: '100%', borderBottomWidth: 5, marginBottom:'10px' }}

                        leftComponent={{ icon: 'menu', color: '#fff', underlayColor: '#3488C0', onPress: () => this.toggleMenu() }}
                        centerComponent={{ text: 'Reser&vas', 
                            style: { color: '#fff', fontWeight: 'bold', fontSize: 20}}}
                        rightComponent={{ icon: 'user-circle-o',type:'font-awesome', color: '#fff', 
                            onPress:()=> Linking.openURL('http://localhost:19006/login') }}
                    >
                        
                    </Header>
                    
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
    )*/
    return (
            <Drawer.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"} drawerContent={props => <SideMenu {...props} />}>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Plan" component={Plan}  />

            </Drawer.Navigator>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)


        
