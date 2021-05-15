const validateNotEmpty = (value, setValid, validAttr) => {
    if(value === ""){
        setValid({
            [validAttr]: false
        })
    } else {
        setValid({
            [validAttr]: true
        })
    }
}

export { validateNotEmpty }