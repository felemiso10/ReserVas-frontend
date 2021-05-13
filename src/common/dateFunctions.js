import React  from 'react';
import moment from 'moment';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const diasSemanaId = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const calcularLunes = (fecha) => {
    var lunes 
    if(fecha.getDay() > 1){
        var dias = fecha.getDay() - 1
        lunes = moment(fecha).subtract(dias, 'days').format('YYYY-MM-DD')
    } else if (fecha.getDay() == 1){
        lunes = moment(fecha).format('YYYY-MM-DD')
    } else if(fecha.getDay() == 0){
        lunes = moment(fecha).subtract(6, 'days').format('YYYY-MM-DD')
    }
    return lunes
}

//Devuelve un array con las fechas de una semana
//lunes debe de llegar con formato DD-MM-YYYY
const calcularFechasPorSemana = (lunes) => {
    var fechas = []
    for(var i = 0; i < 7; i++){
        fechas.push(moment(lunes, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD'))
    }
    return fechas
}

//Devuelve un array con las columnas de la tabla calendario
const calcularFechasParaColumnasCalendario = (lunes) => {
    var semana = []
    const fechas = calcularFechasPorSemana(lunes)
    for(var i = 0; i < 7; i++){
        semana.push({diaSemana: diasSemana[i], fecha: fechas[i], id: diasSemanaId[i]})
    }
    return semana
}

//Se le pasa un lunes con formato DD-MM-YYYY y devuelve la fecha del lunes anterior
const calcularSemanaAnterior = (lunes) => {
    var fechaAnterior = moment(lunes, 'YYYY-MM-DD').subtract(7, 'days').format('YYYY-MM-DD')
    return fechaAnterior
}

//Se le pasa un lunes con formato DD-MM-YYYY y devuelve la fecha del lunes posterior
const calcularSemanaPosterior = (lunes) => {
    return moment(lunes, 'YYYY-MM-DD').add(7, 'days').format('YYYY-MM-DD')
}

const getTituloSemana = (lunes) => {
    const dia = moment(lunes, 'YYYY-MM-DD').format('D')
    const mes = meses[moment(lunes, 'YYYY-MM-DD').format('M') - 1]
    const anyo = moment(lunes, 'YYYY-MM-DD').format('YYYY')

    return 'Semana del ' + dia + ' de ' + mes + ' de ' + anyo
}

export { 
    calcularLunes, 
    calcularFechasPorSemana, 
    calcularSemanaAnterior, 
    calcularSemanaPosterior, 
    getTituloSemana,
    calcularFechasParaColumnasCalendario
}