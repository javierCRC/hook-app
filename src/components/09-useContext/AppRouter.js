import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import { NavBar } from '../09-useContext/components/NavBar';

import { AboutScreen } from '../09-useContext/AboutScreen';
import { LoginScreen } from '../09-useContext/LoginScreen';
import { HomeScreen } from '../09-useContext/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                 
                <div className='container'> 
                    <Routes>
                        <Route path="/" element={ <HomeScreen  /> } />

                        <Route path="/about" element={ <AboutScreen /> } />
                                
                        <Route path="/login" element={ <LoginScreen  /> } />

                        <Route path="/*" element={ <Navigate to={ "/" } replace/> } />        
                    </Routes>
                </div> 

            </div>
        </Router>
    )
}
