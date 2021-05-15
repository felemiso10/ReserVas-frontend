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
import {reservaServicio} from '../actions/user'
import {citasVacias} from '../actions/calendar'

import { useNavigation } from '@react-navigation/native';

const Addcitacliente = ({
  service,
  reservaServicio,
  token,
  user,
  citasVacias,
  empresaName
}) => {
 const [valid, setIsEnabled] = React.useState({
     isValidForm: true,
 })

 const navigation = useNavigation();


 function reservarServicio() {
     reservaServicio({
           name: user,
           token: token,
           id: service.id
       })
       var millisecondsToWait = 900;
       setTimeout(function() {
        setOpen(false)
        citasVacias({empresaName},token)
       }, millisecondsToWait);
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
  token: state.user.userLogged.token,
  user: state.user.userLogged.name,
})
const mapDispatchToProps = {
  reservaServicio,
  citasVacias
}

const AddcitaclienteConnected = connect(mapStateToProps, mapDispatchToProps)(Addcitacliente)

export default AddcitaclienteConnected;
export { Addcitacliente }