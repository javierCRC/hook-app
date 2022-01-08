
import { useState } from 'react'

// custom hook
export const useCounter2 = ( pValue = 1) => {
    
    const [counter, setCounter] = useState(pValue);

    const f_Increment = () => {
        setCounter ( counter + 1 );
    }

    const f_Reset = () => {
        setCounter ( pValue );
    }

    const f_Decrement = () => {

         setCounter ( counter - 1  ); 
        
    }

    return {
        counter,
        f_Increment,
        f_Decrement,
        f_Reset
    };

}


