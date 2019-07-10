import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props)=>{
    return(
            <nav className="navbar navbar-expand-lg ">
                
                <span className="navbar-brand h1 ml-5 mt-1 text-white">Space Data</span>
                
                
                <div className='collapse navbar-collapse '>
                    <ul className="navbar-nav mr-3 ml-auto nav-tabs"> {/* 'ml-auto' makes it on the right side 'mr-auto' makes it on the left side */}
                        <li className="nav-item mt-1"><Link to='/' className="nav-link text-white">Home</Link></li>
                        <li className="nav-item mt-1"><Link to='/Mars' className="nav-link text-white">Mars</Link></li>
                    </ul>
                </div>
            </nav>
            
    )
}

export default Navbar