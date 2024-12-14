import React, { useState } from 'react';
import '../Css/Sidebar.css';
import logo from '../assest/sidebar/logo.jpg';
import home from '../assest/sidebar/home.png';
import about from '../assest/sidebar/about.png';
import client from '../assest/sidebar/client.png';
import contact from '../assest/sidebar/contact.png';
import portfolio from '../assest/sidebar/portfolio.png';
import services from '../assest/sidebar/services.png';
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const [hamburgerr, setHamburger] = useState(false);

    const handlehamburgerr = () => {
        setHamburger(!hamburgerr);
    };

    return (
        <div className="sider-bar">
            <div className="nav-bar">
                <img className='nav-logo' src={logo} alt="logo" />
                <i onClick={handlehamburgerr} className={`ri-menu-line ${hamburgerr ? 'open' : ''}`}></i>
            </div>
            
            <div className={`sidebar-list-outer navbar ${hamburgerr ? 'active' : ''}`}>
                <div className="list-wrapper">
                    <NavLink to="/" className="sidebar-icon-wrapper">
                        <img src={home} alt="" />
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/about" className="sidebar-icon-wrapper">
                        <img src={about} alt="" />
                        <p>About</p>
                    </NavLink>

                    <NavLink to="/services" className="sidebar-icon-wrapper">
                        <img src={services} alt="" />
                        <p>Services</p>
                    </NavLink>

                    <NavLink to="/portfolio" className="sidebar-icon-wrapper">
                        <img src={portfolio} alt="" />
                        <p>Portfolio</p>
                    </NavLink>

                    <NavLink to="/Client" className="sidebar-icon-wrapper">
                        <img src={client} alt="" />
                        <p>Client</p>
                    </NavLink>

                    <NavLink to="/ContactUs" className="sidebar-icon-wrapper">
                        <img src={contact} alt="" />
                        <p>Contact Us</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
