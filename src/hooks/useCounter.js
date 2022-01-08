
import { useState } from 'react'

// custom hook
export const useCounter = ( pValue = 104) => {
    
    const [state, setState] = useState(pValue);

    const f_Increment = (pFactor) => {
        setState ( state + pFactor );
    }

    const f_Reset = () => {
        setState ( pValue );
    }

    const f_Decrement = (pFactor) => {
        setState ( state - pFactor );
    }

    return {
        state,
        f_Increment,
        f_Decrement,
        f_Reset
    };

}


