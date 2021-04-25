import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const BookCard = ({
    book
}) => {
    return book.nombre === "" ? 
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
                        <IconButton color="primary" onClick={() => { /* Crear cita */ }}>
                            <AddIcon />
                        </IconButton>
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
}

export default BookCard