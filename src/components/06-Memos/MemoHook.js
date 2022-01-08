import React, { useState, useMemo } from 'react'

import { useCounter2 } from '../../hooks/useCounter2';
import { f_WeightProcess } from '../../helpers/WeightProcess';

import '../02-useState/effects.css';


export const MemoHook = () => {

    const { counter , f_Increment } = useCounter2(5000);

    const [show, setShow] = useState(true);

    const f_handleClickShow = () =>{
        setShow( !show );
     }

     // if the hook counter of type useState change , this memo must be re momorize againt the value of counter.
     const c_WeightProcessMemo = useMemo( () => f_WeightProcess(counter), [counter] );

    return (
        <div>
            <h1> Memo hook </h1>
            <hr />

           <h2> Counter: <small > { counter }  </small> </h2>
           

           <p> { c_WeightProcessMemo } </p>

            <button className='btn btn-outline-warning'
                    onClick={ f_Increment }
                    >
                +1
            </button>

            <button className="btn btn-outline-dark m-2"
                    onClick={ f_handleClickShow }>
                Show <i className="fas fa-eye"></i> / Hide <i className="fas fa-eye-slash"></i> /--/ { JSON.stringify(show)}
            </button>

        </div>
    )
}
