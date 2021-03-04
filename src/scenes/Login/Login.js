import React, { useState } from 'react'
import { Text, Button } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'

const Login = ({
    loginUser,
    token,
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
                    <Button onPress={loginUser} title="Login" />
                </Card>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.user.token
})
 const mapDispatchToProps = {
    loginUser,
    changeUserLoginInfo
 }

const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginConnected;
export { Login }