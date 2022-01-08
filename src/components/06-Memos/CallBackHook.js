import React,{ useState,useCallback, useEffect } from 'react'

import { ShowBtnIcrement } from './ShowBtnIcrement';

import '../02-useState/effects.css';

export const CallBackHook = () => {

   const [Counter, setCounter] = useState(10);

   // Example 01 of use of the hook useCallback
   const f_Cb_Increment = useCallback( ( pIncrementValue ) => {
          setCounter( vC => vC + pIncrementValue ); // another form to obtain the counter state with out use the counter like a dependency.
       },[setCounter] ); // we can't use counter like dependency because no has effect.


   // eXAMPLE 02 OF  of use of the hook useCallback WITH useEffect hook
    useEffect(() => {
        
    }, [f_Cb_Increment])

    return (
        <div>

            <h1> useCallback hook { Counter } </h1>
            <hr />

            <ShowBtnIcrement pFunctionIncrement={ f_Cb_Increment } pIncrment={ 10 }/>
            
        </div>
    )
}
