import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'

const CustomInput = ({
    placeholder,
    onChange,
    idInput,
    user,
    isValidValue,
    validateValue,
    isPasswordInput,//opcional
   
}) => {
    

    const [valid, setIsValid] = useState(true)

    function validateValue2() {
         switch (idInput) {
            case 'name':
                {user.name ? setIsValid(true) : setIsValid(false)}
            break;
            
            case 'password':
                {user.password ? setIsValid(true) : setIsValid(false)}
                break;
             default:
                break;
         }
    }
    
    
return(
    <Input  
        placeholder={placeholder} 
        onBlur = {() => validateValue2()} 
        onChangeText={value => onChange(idInput, value)}
        secureTextEntry={isPasswordInput}
        errorMessage={valid ? '' : 'No puede tener el campo vacío'}
        
    />
)
}

const mapStateToProps = state => ({
    user: state.user.user
})
const InputConnected = connect(mapStateToProps)(CustomInput)

export default InputConnected;
export  { CustomInput }