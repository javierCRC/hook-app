import React, { useState } from 'react'
import { useCounter2 } from '../../hooks/useCounter2';

import '../02-useState/effects.css';
import { Small } from './Small';

export const Memorize = () => {

    const { counter , f_Increment } = useCounter2(10);

    const [show, setShow] = useState(true);

    const f_handleClickShow = () =>{
        setShow( !show );
     }

    return (
        <div>
            <h1> Memorize </h1>
            <hr />

           <h2> Counter: <Small pCounter = { counter } /> </h2> 
           

            <button className='btn btn-outline-success'
                    onClick={ f_Increment }
                    >
                +1
            </button>

            <button className="btn btn-outline-primary m-2"
                    onClick={ f_handleClickShow }>
                Show <i className="fas fa-eye"></i> / Hide <i className="fas fa-eye-slash"></i> /--/ { JSON.stringify(show)}
            </button>

        </div>
    )
}
