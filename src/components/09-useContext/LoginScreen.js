import React, { useContext } from 'react';
import { cUserContext } from '../09-useContext/UserContext';

export const LoginScreen = () => {

    const vContext2 = useContext(cUserContext);
    
    const { setUser } = vContext2;

    const cUser2 = {
        vId: 702360073,
        vName: "Javier Mendoza Blandon",
        vEmail: "javiereduardom.b22@gmail.com"
    }

    return (
        <div>

             <h1> Login </h1>
             <hr />
             <button className='btn btn-primary m-2'
                      onClick={ () => setUser(cUser2) }
                     >
                Inicializar
             </button>
             
            
        </div>
    )
}
