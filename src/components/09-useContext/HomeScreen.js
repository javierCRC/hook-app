import React, { useContext } from 'react';
import { cUserContext } from '../09-useContext/UserContext';

export const HomeScreen = () => {

    const vContext = useContext(cUserContext);

    //console.log(vContext);
    
    const { User } = vContext;
    
    
    //console.log(vName);

    return (
        <div>
            <h1> Home </h1>
             <hr />
             <p> Usuario: { User.vName } </p>
            
             <br></br>
             <pre>
                 { JSON.stringify(User,null,3) }
             </pre>
        </div>
    )
}
