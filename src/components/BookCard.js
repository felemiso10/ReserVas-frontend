import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Addcitahomeservice  from './Addcitahomeservice';
import Addcitacliente  from './Addcitacliente';

const BookCard = ({
    book,
    tipo
}) => {
   // console.log(book)
    return tipo == "verEmpresa" ? 
    (
       <Card>
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
                <Tooltip title="Añadir cita" >
                     <Addcitacliente service={book}></Addcitacliente>        
                 </Tooltip>
            </CardContent>
       </Card>
    )
    :
    (
        book.estado == "LIBRE" ? 
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
                    {book.nombre}
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
}

export default BookCard