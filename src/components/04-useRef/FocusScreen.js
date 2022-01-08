import React, { useRef } from 'react'

import './effects.css';

export const FocusScreen = () => {
     
    const vInputRef = useRef();
      //console.log( vInputRef );

    const f_handleClick = () => {

        vInputRef.current.select();

    }

    return (
        <div>
            <h1> Focus Screen with useRef </h1>
            <hr />

            <input ref = { vInputRef }
                   className='form-control'
                   placeholder='Put your name'
            
            />

            <button 
                 className='btn btn-outline-primary m-3'
                 onClick={ f_handleClick }
            >
                Focus <i className="fas fa-eye"></i>
                
            </button>
            
        </div>
    )
}
