import React, { useState } from 'react'
import { Text, Button, Linking, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { loginUser, changeUserLoginInfo } from '../../actions/user'
import { Card, Input } from 'react-native-elements'
import { View } from 'react-native';

const Login = ({
    loginUser,
    user,
    changeUserLoginInfo
}) => {
   const [valid, setIsEnabled] = React.useState({
       isValidName: true,
       isValidPass: true,
       isValidForm: true,
   })

  
   function loginComp() {
       if(user.name == "" || user.name == undefined || user.password == "" || user.password == undefined){
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
   
   function nameVal() {
       if (user.name == ""){
            setIsEnabled({
                
                isValidName: false
            })
           
       }
       else{
            setIsEnabled({
                
                isValidName: true
            })
           
        }
   }
    function passVal() {
        if (user.password == ""){
            setIsEnabled({
                isValidPass: false
            })
            
        }
        else{
            setIsEnabled({
                isValidPass: true
            })
            
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
                        loginComp()
                    } title="Login" />
                    <Text style={{alignSelf: 'center', color: 'black', textDecorationLine: 'underline'}}
                    onPress={() => Linking.openURL('http://localhost:19006/register')}>
                    Sign up
                    </Text>
                </Card>
            </div>
        {valid.isValidForm || valid.isValidForm == undefined ? null :

            <div>
            <View style ={styles.container}>
                <Text style ={{color: "white"}}> Tienes que rellenar todos los campos </Text>
            </View>
            </div>
        }

        </div>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: "red",
        marginBottom: "10px",
        marginLeft:"10px"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: "red",
        opacity: "0.7",
        color: "white",
        marginTop: "20px",
        padding:"60px, 30px"
      },
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