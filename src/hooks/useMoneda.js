import React, {Fragment, useState} from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
           <label>{label}</label>
           <select>
               <option value="">--Selecciona--</option>
               {opciones.map(opcion => (
                   <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
           </select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state.
    return [state, Seleccionar];
}

export default useMoneda;