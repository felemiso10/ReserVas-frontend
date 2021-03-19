import React, { useState } from 'react'
import { Input } from 'react-native-elements'

const CustomInput = ({
    placeholder,
    onChange,
    idInput,
    isValidValue,
    validateValue,
    isPasswordInput //opcional
}) => 
(
    <Input  
        placeholder={placeholder} 
        onBlur = {() => validateValue()} 
        onChangeText={value => onChange(idInput, value)}
        secureTextEntry={isPasswordInput}
        errorMessage={isValidValue || isValidValue == undefined ? '' : 'No puede tener el campo vacío'}
    />
)

export default CustomInput