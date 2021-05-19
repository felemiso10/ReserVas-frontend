import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import CustomInput from '../components/forms/CustomInput'
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {reservaServicio,changeServiceInfo} from '../actions/user'
import {getCitasEmpresa} from '../actions/calendar'

import { useNavigation } from '@react-navigation/native';


const Addcitahomeservice = ({
  service,
  changeServiceInfo,
  servicio,
  token,
  user,
  getCitasEmpresa
}) => {
 const [valid, setIsEnabled] = React.useState({
     isValidForm: true,
 })

 const navigation = useNavigation();

 function reservarServicio() {
  if(service.cliente === "" || service.cliente === undefined ){
       setIsEnabled({isValidForm: false})
  }
  else{
   setIsEnabled({isValidForm: true})

    reservaServicio({
          name: service.cliente,
          token: token,
          id: servicio.id
      })
      var millisecondsToWait = 900;
      setTimeout(function() {
       setOpen(false)
       getCitasEmpresa(user,token)
      }, millisecondsToWait);

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
            <IconButton color="primary" onClick={handleOpen}>
               <AddIcon />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <View style={styles.registerContainer}>
                <div className="row">
                <Card>
                <Card.Title>¿Agregar cita?</Card.Title>
                <Card.Divider/>
                <CustomInput 
                placeholder='Usuario...' 
                onChange={changeServiceInfo} 
                idInput='cliente'
                object ={service}
                isRequired = 'true'                  
                />
                <Card.Divider/>
                <Button onPress={() => 
                reservarServicio()
                } title="Agregar cita" />
                </Card>
                </div>
            </View>
            </Modal>

        </div>
    )
}

const mapStateToProps = state => ({
  service: state.user.service,
  token: state.user.userLogged.token,
  user: state.user.userLogged.name,
})
const mapDispatchToProps = {
  reservaServicio,
  changeServiceInfo,
  getCitasEmpresa
}

const AddcitahomeserviceConnected = connect(mapStateToProps, mapDispatchToProps)(Addcitahomeservice)

export default AddcitahomeserviceConnected;
export { Addcitahomeservice }