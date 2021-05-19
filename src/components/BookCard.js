import React, {useState} from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Addcitahomeservice  from './Addcitahomeservice';
import Addcitacliente  from './Addcitacliente';
import { getPlanById } from '../actions/calendar'
import Modal from '@material-ui/core/Modal';
import { Text, View, Button } from 'react-native';
import styles from '../styles/commonStyles'
import {getAllBookings, cancelaServicio} from '../actions/calendar'
const BookCard = ({
    book,
    tipo,
    tipoUser,
    token,
    getPlanById,
    selectedPlan,
    empresaName,
    getAllBookings,
    user,
    cancelaServicio
}) => {
   // console.log(book)

   const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function cancelarServicio() {
    cancelaServicio({
          token: token,
          id: book.id
      })
      var millisecondsToWait = 900;
      setTimeout(function() {
       setOpen(false)
       getAllBookings(token, user)
      }, millisecondsToWait);
 }

   return (
       tipoUser === 'empresa' ?
       (
            book.estado === "LIBRE" ? 
            (
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            Hora inicio: {book.horaInicio}
                        </Typography>
                        <Typography color="textSecondary">
                            Hora fin: {book.horaFin}
                        </Typography>
                        <Tooltip title="Añadir cita" >
                            <Addcitahomeservice servicio={book}></Addcitahomeservice>        
                        </Tooltip>
                    </CardContent>
                </Card>
            )
            :
            (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {book.estado === "PLAN" ? (book.nombre + ' (Plan)') : book.cliente}
                        </Typography>
                        <Typography color="textSecondary">
                            Hora inicio: {book.horaInicio}
                        </Typography>
                        <Typography color="textSecondary">
                            Hora fin: {book.horaFin}
                        </Typography>
                    </CardContent>
                </Card>
        
            )
       )
       :
       (
           <>
            <Card onClick={() => {
                tipo !== 'verEmpresa' && getPlanById(token, book.id) && handleOpen
            }}>
                <CardContent>
                <Typography variant="h5" component="h2">
                    {book.nombre}
                </Typography>
                    <Typography color="textSecondary">
                    Hora inicio: {book.horaInicio}
                    </Typography>
                <Typography color="textSecondary">
                        Hora fin: {book.horaFin}
                </Typography>
                {
                    tipo !== 'verEmpresa' &&
                <Text style={{marginLeft:5,marginBottom:5,color:'blue',textDecoration:'underline',cursor:'pointer'}}  onClick={handleOpen}>
                Más info
                </Text>
                }
                {
                    tipo === 'verEmpresa' &&
                    <Tooltip title="Añadir cita" >
                        <Addcitacliente service={book} empresaName = {empresaName}></Addcitacliente>        
                    </Tooltip>
                }
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <View style={styles.infoCita}>
                <div className="row">
                <Card style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                <Typography style={{fontSize:24,alignItems:'center',fontWeight:'semi-bold',paddingTop: 30,padding: 30}}>Detalles Servicio</Typography> 
                <CardContent> 
                <Typography color="textSecondary">
                       Empresa: {book.empresa}
                </Typography>
                <br/>
                <Typography color="textSecondary">
                       Servicio: {book.nombre}
                </Typography>
                <br/>
                <Typography color="textSecondary">
                        Direccion: {book.direccion}
                </Typography>
                <br/>
                <Typography color="textSecondary">
                        Precio: {book.precio}€
                </Typography>
                <br/>
                <Button color="red" style={{width:200}} onPress={() => cancelarServicio()} title="Cancelar" />

                </CardContent>
                </Card>
                </div>
            </View>
            </Modal>
            </>
       )
   )

}

const mapStateToProps = state => ({
    token: state.user.userLogged.token,
    selectedPlan: state.calendar.selectedPlan,
    user: state.user.userLogged.name,
})

const mapDispatchToProps = {
    getPlanById,
    getAllBookings,
    cancelaServicio
}

const BookCardConnected = connect(mapStateToProps, mapDispatchToProps)(BookCard)

export default BookCardConnected
export { BookCard }