import React, { useState, useRef, useLayoutEffect } from 'react'


import { useFetch } from '../../hooks/useFetch';
import { useCounter2 } from '../../hooks/useCounter2';

import './layout.css';


export const LayaoutEffect = () => {

    const { counter , f_Increment } = useCounter2(1);

    const vURLAPI= `https://breakingbadapi.com/api/quotes/${counter}`;
    const state = useFetch(vURLAPI);
    
    //console.log(state);
    
     const { pData } = state;
     
     const { quote  } = !!pData && pData[0]; // if exist data and is not null , extract the data of the position 0 of the array.
     
     const pTag = useRef();
     const [boxSize, setBoxSize] = useState({});

     // this hook is active after the dom is loaded and when the quote is changing
     useLayoutEffect(() => {

            setBoxSize( pTag.current.getBoundingClientRect());

     }, [quote]);
    

    return (
        <div>
            <h1> hook: use Layaout Effect </h1>
            <hr />

             {
                        <blockquote className='blockquote text-right'>
                        <p className='mb-0'
                            ref={ pTag } // the const of the hook useRef
                        > { quote } </p>
                        </blockquote>
             }
            
        <button className="btn btn-primary"
                onClick={ f_Increment }>
                Next quote
        </button>
            
        
        <pre className='m-3'>
            {
                JSON.stringify( boxSize , null , 3)
            }
        </pre>

        </div>
    )
}

