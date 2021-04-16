import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'

const CustomInput = ({
    placeholder,
    onChange,
    idInput,
    object,
    isPasswordInput,//opcional
    isRequired
   
}) => {
    

    const [valid, setIsValid] = useState(true)

    function inputValidate() {
        
        isRequired ? object[idInput] ? setIsValid(true) : setIsValid(false) : ``
    }
    
    
return(
    <Input  
        placeholder={placeholder} 
        onBlur = {() => inputValidate()} 
        onChangeText={value => onChange(idInput, value)}
        secureTextEntry={isPasswordInput}
        errorMessage={valid ? '' : 'No puede tener el campo vacío'}
        
    />
)
}

export  default CustomInput 