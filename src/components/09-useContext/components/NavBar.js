import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

           <NavLink to="./" className='navbar-brand'> useContext </NavLink>

            <div className='navbar-nav'>
             
                <NavLink to="./" className= "nav-item nav-link { ({ isActive }) => ? 'active': '' }" > Home <i className="fas fa-home"></i> </NavLink>
                <NavLink to="./about" className= "nav-item nav-link { ({ isActive }) => ? 'active': '' }" > About <i className="fas fa-building"></i> </NavLink>
                <NavLink to="./login" className= "nav-item nav-link { ({ isActive }) => ? 'active': '' }" > Login <i className="fas fa-sign-in-alt"></i> </NavLink>
               
            </div>
            
        </nav>
    )
}
