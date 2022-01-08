import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state, f_Increment,f_Decrement, f_Reset } = useCounter();

    return (
        <>
                <h1> Counter with hooks { state } </h1>
               <hr />

              <button className="btn btn-primary m-2"
                  onClick = { () => {
                      f_Increment(3);
                  }}
               >
                    +1
               </button>

               <button className="btn btn-warning m-2"
                  onClick = { () => {
                     f_Reset();
                  }}
               >
                    Reset
               </button>

              <button className="btn btn-danger m-2"
                  onClick = { () => {
                      f_Decrement(3);
                  }}
               >
                    -1
               </button>

        </>
    )
}
