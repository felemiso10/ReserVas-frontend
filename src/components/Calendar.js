import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';

import BookCard from './BookCard'

import { 
    calcularFechasParaColumnasCalendario, 
    getTituloSemana,
    calcularSemanaAnterior,
    calcularSemanaPosterior 
} from '../common/dateFunctions'

const Calendar = ({
    fecha, //debe ser un lunes
    selectedDate,
    changeWeek
}) => {
    const [columns, setColumns] = useState(calcularFechasParaColumnasCalendario(fecha))

    useEffect(() => {
        setColumns(calcularFechasParaColumnasCalendario(fecha))
    }, [fecha]) 

    return (
        <Paper style={{ width: '100%' }}>
            <Toolbar>
                <Tooltip title="Semana anterior">
                    <IconButton onClick={() => { changeWeek(calcularSemanaAnterior(fecha)) }}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Tooltip>
                <Typography variant="h6" id="tableTitle" component="div">
                    {getTituloSemana(fecha)}
                </Typography>
                <Tooltip title="Siguiente semana">
                    <IconButton onClick={() => { changeWeek(calcularSemanaPosterior(fecha)) }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell
                                    align={'center'}
                                    style={{ minWidth: 170 }}
                                >
                                    {col.diaSemana} ({col.fecha})
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                columns.map((col) => (
                                    <TableCell
                                        align={'center'}
                                    >
                                        { 
                                            selectedDate[col.id].bookings.length > 0 ?
                                                selectedDate[col.id].bookings.map(b => (
                                                    <BookCard book={b} />
                                                ))
                                            :
                                                <> No tienes citas para este día </>
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default Calendar