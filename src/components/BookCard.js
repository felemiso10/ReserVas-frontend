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
import { Text, View } from 'react-native';
import styles from '../styles/commonStyles'

const BookCard = ({
    book,
    tipo,
    tipoUser,
    token,
    getPlanById,
    selectedPlan,
    empresaName
}) => {
   // console.log(book)

    const [openModal, setOpenModal] = useState(false)

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
                tipo !== 'verEmpresa' && getPlanById(token, book.id) && setOpenModal(true)
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
                    tipo === 'verEmpresa' &&
                    <Tooltip title="Añadir cita" >
                        <Addcitacliente service={book} empresaName = {empresaName}></Addcitacliente>        
                    </Tooltip>
                }
                </CardContent>
            </Card>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <View style={styles.registerContainer}>
                    <div className="row">
                        Aquí va la información de la cita (selectedPlan tiene toda la información de la cita)
                    </div>
                </View>
            </Modal>
            </>
       )
   )

}

const mapStateToProps = state => ({
    token: state.user.userLogged.token,
    selectedPlan: state.calendar.selectedPlan
})

const mapDispatchToProps = {
    getPlanById
}

const BookCardConnected = connect(mapStateToProps, mapDispatchToProps)(BookCard)

export default BookCardConnected
export { BookCard }