import React, { useState } from 'react'
import { Text, Button, Linking, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { set } from 'ramda';

const Login = ({
    loginUser,
    user,
    changeUserLoginInfo
}) => {
   const [valid, setIsEnabled] = React.useState({
       isValidName: true,
       isValidPass: true
   })
   
   function nameVal() {
       if (user.name == ""){
            setIsEnabled({
                
                isValidName: false
            })
            console.log(valid.isValidName , "el false")
       }
       else{
            setIsEnabled({
                
                isValidName: true
            })
            console.log(valid.isValidName , "el true")
        }
   }
    function passVal() {
        if (user.password == ""){
            setIsEnabled({
                isValidPass: false
            })
            console.log(valid.isValidPass , "Pass false")
        }
        else{
            setIsEnabled({
                isValidPass: true
            })
            console.log(valid.isValidPass , "pass true")
        }
    }

    return (
        <div>
            <div className="row">
                <Card>
                    <Card.Title>LOGIN</Card.Title>
                    <Card.Divider/>
                    <Input  placeholder='Name' onBlur = {() => nameVal()} onChangeText={value => changeUserLoginInfo('name', value)}
                    />

                        {valid.isValidName || valid.isValidName == undefined ? null :
                            <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
                        }   

                    <Input  placeholder='Password'
                    secureTextEntry={true}
                    onBlur = {() => passVal()}
                    onChangeText={value => changeUserLoginInfo('password', value)} 
                    />

                    {valid.isValidPass || valid.isValidPass == undefined ? null :
                        <Text style={styles.errorMsg}>No puede tener el campo vacío</Text>
                    }

                    <Button onPress={() => 
                        loginUser({
                            name: user.name,
                            password: user.password
                        })
                    } title="Login" />
                    <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
                    onPress={() => Linking.openURL('http://localhost:19006/register')}>
                    Sign up
                    </Text>
                </Card>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: "red",
        marginBottom: "10px",
        marginLeft:"10px"
    }
});


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