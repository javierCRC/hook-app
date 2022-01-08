import React, { useState } from 'react'
import { AppRouter } from '../09-useContext/AppRouter';
import { cUserContext } from '../09-useContext/UserContext';

export const MainApp = () => {
    
     
     const [User, setUser] = useState({});

   
    /*const cUser = {
        vId: 702360073,
        vName: "Javier Mendoza Blandon",
        vEmail: "javiereduardom.b22@gmail.com"
    }*/

    return (
        <cUserContext.Provider value={{
            User, 
            setUser 
        }}>
            <AppRouter />
        </cUserContext.Provider>
    )
}
