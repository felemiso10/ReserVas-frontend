import React from 'react'
import { Card } from 'react-native-elements'
import { View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import CustomInput from '../components/forms/CustomInput'
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {changeServiceInfo, newService} from '../actions/user'

const Addcitacliente = ({
  service,
  changeServiceInfo,
  newService
}) => {
 const [valid, setIsEnabled] = React.useState({
     isValidForm: true,
 })

 function newServiceComp() {
  if(service.name === "" || service.name === undefined ){
       setIsEnabled({isValidForm: false})
  }
  else{
   setIsEnabled({isValidForm: true})

       newService({
           name: service.name,
           precio:service.precio
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
                <Card.Title>Rellenar cita</Card.Title>
                <Card.Divider/>

                <CustomInput 
                placeholder='Nombre del servicio...' 
                onChange={changeServiceInfo} 
                idInput='name'
                object ={service}
                isRequired = 'true'                  
                />

                <Card.Divider/>
                <Button onPress={() => 
                newServiceComp()
                } title="Agregar cita" />
                </Card>
                </div>
            </View>
            </Modal>

        </div>
    )
}

const mapStateToProps = state => ({
  service: state.user.service
})
const mapDispatchToProps = {
  newService,
  changeServiceInfo
}

const AddcitaclienteConnected = connect(mapStateToProps, mapDispatchToProps)(Addcitacliente)

export default AddcitaclienteConnected;
export { Addcitacliente }