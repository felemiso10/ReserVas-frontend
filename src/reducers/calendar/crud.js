import { Actions, cancelaServicio, getClientes,getPlanById } from '../../actions/calendar'
import { fullfilled, rejected, pending } from '../utils'
import { calcularFechasPorSemana } from '../../common/dateFunctions'

const getAllBookingsFullFilled = (state, { payload }) => ({
    ...state,
    allBookings: payload
})

const changeWeek = (state, { payload }) => {
    const fechasSemana = calcularFechasPorSemana(payload.fechaLunes)
    return {
        ...state,
        selectedDate: {
            lunes: {fecha: fechasSemana[0], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[0])},
            martes: {fecha: fechasSemana[1], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[1])},
            miercoles: {fecha: fechasSemana[2], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[2])},
            jueves: {fecha: fechasSemana[3], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[3])},
            viernes: {fecha: fechasSemana[4], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[4])},
            sabado: {fecha: fechasSemana[5], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[5])},
            domingo: {fecha: fechasSemana[6], bookings: state.allBookings.filter(b => b.fecha === fechasSemana[6])}
        }
    }
}

const getAllPlanesFullFilled = (state, { payload }) => {
    console.log(payload)
    return {
        ...state,
        allPlanes: payload
    }
}

const getClientesFullFilled = (state, { payload }) => {
    return {
        ...state,
        clientesAnteriores: payload
    }
}

const citasVacias = (state, { payload }) => {
    console.log(payload)
    return {
        ...state,
        allBookings: payload
    }
}

const getCitasEmpresa = (state, { payload }) => {
    console.log(payload)
    return {
        ...state,
        allBookings: payload
    }
}

const getMyPlanesFullfilled = (state, { payload }) => {
    console.log(payload)
    return {
        ...state,
        myPlanes: payload
    }
}

const getPlanByIdFullfilled = (state, { payload }) => {
    return {
        ...state,
        selectedPlan: payload
    }
}

const cancelaServicioFullfilled = (state, { payload }) => {
    return {
        ...state,
    }
}
const Crud = {
    [fullfilled(Actions.GET_ALL_BOOKINGS)]: getAllBookingsFullFilled,
    [Actions.CHANGE_WEEK]: changeWeek,
    [fullfilled(Actions.GET_ALL_PLANES)]: getAllPlanesFullFilled,
    [fullfilled(Actions.GET_CLIENTES)]: getClientesFullFilled,
    [fullfilled(Actions.GET_CITAS_VACIAS)]: citasVacias,
    [fullfilled(Actions.GET_ALL_BOOKINGS)]: getCitasEmpresa,
    [fullfilled(Actions.GET_MY_PLANES)]: getMyPlanesFullfilled,
    [fullfilled(Actions.GET_PLAN_BY_ID)]: getPlanByIdFullfilled,
    [fullfilled(Actions.CANCELA_SERVICIO)] : cancelaServicio
}

export default Crud