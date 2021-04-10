import React  from 'react';
import moment from 'moment';

const calcularLunes = (fecha) => {
    var lunes 
    if(fecha.getDay() > 1){
        var dias = fecha.getDay() - 1
        lunes = moment(fecha).subtract(dias, 'days').format('DD-MM-YYYY')
    } else if (fecha.getDay() == 1){
        lunes = moment(fecha).format('DD-MM-YYYY')
    } else if(fecha.getDay() == 0){
        lunes = moment(fecha).substract(6, 'days').format('DD-MM-YYYY')
    }
    return lunes
}

//Devuelve un array con las fechas de una semana
//lunes debe de llegar con formato DD-MM-YYYY
const calcularFechasPorSemana = (lunes) => {
    var fechas = []
    for(var i = 0; i < 7; i++){
        fechas.push(moment(lunes, 'DD-MM-YYYY').add(i, 'days').format('DD-MM-YYYY'))
    }
    return fechas
}

//Se le pasa un lunes con formato DD-MM-YYYY y devuelve la fecha del lunes anterior
const calcularSemanaAnterior = (lunes) => {
    var fechaAnterior = moment(lunes, 'DD-MM-YYYY').subtract(7, 'days').format('DD-MM-YYYY')
    return fechaAnterior
}

//Se le pasa un lunes con formato DD-MM-YYYY y devuelve la fecha del lunes posterior
const calcularSemanaPosterior = (lunes) => {
    return moment(lunes, 'DD-MM-YYYY').add(7, 'days').format('DD-MM-YYYY')
}

const getTituloSemana = (lunes) => {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const dia = moment(lunes, 'DD-MM-YYYY').format('D')
    const mes = meses[moment(lunes, 'DD-MM-YYYY').format('M') - 1]
    const anyo = moment(lunes, 'DD-MM-YYYY').format('YYYY')

    return 'Semana del ' + dia + ' de ' + mes + ' de ' + anyo
}

export { calcularLunes, calcularFechasPorSemana, calcularSemanaAnterior, calcularSemanaPosterior, getTituloSemana}