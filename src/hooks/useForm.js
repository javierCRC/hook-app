

import { useState } from 'react';

// custom hook
export const useForm = ( pinitialState = {} ) => {

    const [ stateValues , setStateValues ] = useState(pinitialState);

    const f_handleInputChange = ( { target }) => {
        //console.log(target);
        
        setStateValues( {
           ...stateValues,
           [ target.name] : target.value
         }
        );
    }

    const f_handleCleanForm = () => {
       setStateValues(pinitialState);
    }

   // return Array
     //return [ stateValues , f_handleInputChange ]; // form 1 of return
   return { stateValues , f_handleInputChange, f_handleCleanForm  };   // form 2 of return
}
