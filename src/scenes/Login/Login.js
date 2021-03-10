import React, { useState } from 'react'
import { Text, Button, Linking } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'

const Login = ({
    loginUser,
    user,
    changeUserLoginInfo
}) => {
    return (
        <div>
            <div className="row">
                <Card>
                    <Card.Title>LOGIN</Card.Title>
                    <Card.Divider/>
                    <Input  placeholder='Name' onChangeText={value => changeUserLoginInfo('name', value)} />
                    <Input  placeholder='Password' onChangeText={value => changeUserLoginInfo('password', value)} />
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