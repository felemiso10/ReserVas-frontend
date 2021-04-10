import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from '../styles/commonStyles'

import { calcularFechasParaColumnasCalendario, getTituloSemana } from '../common/dateFunctions'

const Calendar = ({
    fecha, //debe ser un lunes
    selectedDate
}) => {
    const [columns, setColumns] = useState(calcularFechasParaColumnasCalendario(fecha))
    return (
        <Paper style={{ width: '100%' }}>
            <Toolbar>
                <Typography variant="h6" id="tableTitle" component="div">
                    {getTituloSemana(fecha)}
                </Typography>
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
                                    {col.diaSemana} ( {col.fecha} )
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
                                                    b.nombre
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