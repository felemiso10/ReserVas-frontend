import React, { useState } from 'react'
import { Text, Button, Linking, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { View } from 'react-native';
import Header from '../../components/Header'
import CustomInput from '../../components/forms/CustomInput'

import styles from '../../styles/commonStyles'

const Login = ({
    loginUser,
    user,
    changeUserLoginInfo,
    navigation
}) => {
   const [valid, setIsEnabled] = React.useState({
    
       isValidForm: true,
   })

  
   function loginComp() {
       if(user.name === "" || user.name === undefined || user.password === "" || user.password === undefined){
            setIsEnabled({isValidForm: false})
       }
       else{
        setIsEnabled({isValidForm: true})
        
         
            loginUser({
                name: user.name,
                password: user.password
            })
    
       }
    }
    return (
        <View >
            <Header navigation={navigation}/>
            <View style={styles.registerContainer}>
                <div className="row">
                    <Card>
                        <Card.Title>LOGIN</Card.Title>
                        <Card.Divider/>
                        <CustomInput 
                            placeholder='Name' 
                            onChange={changeUserLoginInfo} 
                            idInput='name'                  
                        />  
                        <CustomInput 
                            placeholder='Password' 
                            onChange={changeUserLoginInfo} 
                            idInput='password'
                        />

                        <Button onPress={() => 
                            loginComp()
                        } title="Login" />
                        <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
                        onPress={() => navigation.navigate('Register')}>
                        Sign up
                        </Text>
                    </Card>
                </div>
            </ View>
            {valid.isValidForm || valid.isValidForm == undefined ? null :
                <div>
                <View style ={styles.loginContainer}>
                    <Text style ={{color: "white"}}> Tienes que rellenar todos los campos </Text>
                </View>
                </div>
            }
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
})
 const mapDispatchToProps = {
    loginUser,
    changeUserLoginInfo
 }

const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginConnected;
export { Login }