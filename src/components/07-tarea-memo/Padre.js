import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../02-useState/effects.css';
export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

  
      // Example 01 of use of the hook useCallback
   const f_Cb_Increment = useCallback( ( pNumero ) => {
        setValor( vC => vC + pNumero ); // another form to obtain the counter state with out use the counter like a dependency.
    },[setValor] ); // we can't use counter like dependency because no has effect.



    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        pNumero={ n }
                        f_incrementar={ f_Cb_Increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
