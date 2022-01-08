import React,{ useState } from 'react'

import { MultipleCustomHook } from '../03-Examples/MultipleCustomHook';

import './effects.css';

export const RealExampleUseRef = () => {
   
    const [show, setShow] = useState(false);
   
    const f_handleClickShow = () =>{
       setShow( !show );
    }

    return (
        <div>
            <h1> Real Example of useRef</h1>
            <hr />

            { show && <MultipleCustomHook /> }
            
            <button className="btn btn-outline-success"
                    onClick={ f_handleClickShow }>
                Show <i className="fas fa-eye"></i> / Hide <i className="fas fa-eye-slash"></i>
            </button>

            

        </div>
    )


}
