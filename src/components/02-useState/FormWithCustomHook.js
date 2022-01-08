import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';


export const FormWithCustomHook = () => {
   
    //const [ stateValues , f_handleInputChange ] = useForm({  form 1
    const { stateValues , f_handleInputChange } = useForm({ // form 2
        pName:'',
        pEmail:'',
        pPassword:''
    });

    const { pName, pEmail , pPassword } = stateValues; // destructuring
      
  

    useEffect( () => {
        console.log('Changed the email');
    },[pEmail]) // only active this event in every change of the email input
    
    const f_handleSubmit = (e) =>{
         e.preventDefault();

         console.log( stateValues );
         alert(JSON.stringify(stateValues));
    }

    return (
        <form onSubmit={ f_handleSubmit }>
            <h1>Form with custom Hook</h1>
            <hr />  

            <div className="form-group">
                    <input type="text" 
                           name="pName"
                           className="form-control"
                           autoComplete="off"
                           placeholder="Your name"
                           value= { pName }
                           onChange = { f_handleInputChange } // Put the correct value thank to name of the input relationate with the destructuring
                    />
            </div>

            <div className="form-group">
                    <input type="text" 
                           name="pEmail"
                           className="form-control"
                           autoComplete="off"
                           placeholder="Your email"
                           value= { pEmail }
                           onChange = { f_handleInputChange }
                    />
            </div>

            <div className="form-group">
                    <input type="password" 
                           name="pPassword"
                           className="form-control"
                           placeholder="***********"
                           value= { pPassword }
                           onChange = { f_handleInputChange }
                    />
            </div>
            
            <button type='submit' 
                    className='btn btn-primary'
                    >
                        Guardar
            </button>

        </form>
    )
}
