import React, { useState } from 'react'

export const CounterApp = () => {
    
    
    const [counter, setcounter] = useState(10);
    const [ counterP, setcounterP] = useState({
        counter1: 20,
        counter2: 30
    })

   const {counter1, counter2} = counterP;

    return (
        <>
            
            <h1> Counter { counter } </h1>
               

               <button className="btn btn-primary m-2"
                  onClick = { () => {
                       setcounter ( counter + 1 );
                  }}
               >
                    +1
               </button>

               <button className="btn btn-warning m-2"
                  onClick = { () => {
                       setcounter( counter );
                  }}
               >
                    reset
               </button>

               <button className="btn btn-danger m-2"
                  onClick = { () => {
                       setcounter ( counter - 1 );
                  }}
               >
                    -1
               </button>

               <hr />

               <h1> Counter1 { counter1 } <br />
                    Counter2 { counter2 }
               </h1>

               <button className="btn btn-primary m-2"
                  onClick = { () => {
                    setcounterP ({
                        ...counterP, // para mantener los state de los demas valores del arreglo
                        counter1:  counter1 + 1 
                    });

                  }}
               >
                    +1 sumar
               </button>
             
        </>
    )
}
