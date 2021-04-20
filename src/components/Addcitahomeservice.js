import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import CustomInput from '../components/forms/CustomInput'
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const Addcitahomeservice = ({
  user,
  changeUserLoginInfo
}) => {
 const [valid, setIsEnabled] = React.useState({
     isValidForm: true,
 })

 function loginComp() {
  if(user.name === "" || user.name === undefined ){
       setIsEnabled({isValidForm: false})
  }
  else{
   setIsEnabled({isValidForm: true})

       loginUser({
           name: user.name,
       })

  }
}

const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
    return (
        <div>
            <button type="button" onClick={handleOpen} >
                <IconButton color="primary" >
                    <AddIcon />
                </IconButton>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <View style={styles.registerContainer}>
                <div className="row">
                <Card>
                <Card.Title>Añadir cita</Card.Title>
                <Card.Divider/>
                <CustomInput 
                placeholder='Usuario que reservará...' 
                onChange={changeUserLoginInfo} 
                idInput='username'
                object ={user}
                isRequired = 'true'                  
                />  
                <Card.Divider/>
                <Button onPress={() => 
                loginComp()
                } title="Crear cita" />
                </Card>
                </div>
            </View>
            </Modal>

        </div>
    )
}

export default Addcitahomeservice