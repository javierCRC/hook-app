import React, { useContext } from 'react';
import { cUserContext } from '../09-useContext/UserContext';

export const AboutScreen = () => {

    const vContext = useContext(cUserContext);

    const { User , setUser } = vContext;

    const f_handleUser = () => {
        setUser({});
    }

    return (
        <div>

             <h1> About </h1>
             <hr />
             <p> Usuario: { User.vName } </p>
            
             <br></br>
             <pre>
                 { JSON.stringify(User,null,3) }
             </pre>

             <button className='btn btn-warning m-2'
                      onClick={ f_handleUser }
                     >
                Logout
             </button>
            
        </div>
    )
}
