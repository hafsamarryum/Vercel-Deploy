import React, { useState } from 'react';
import '../Css/Sidebar.css';
import logo from '../assest/sidebar/logo.jpg';
import home from '../assest/sidebar/home.png';
import about from '../assest/sidebar/about.png';
import client from '../assest/sidebar/client.png';
import contact from '../assest/sidebar/contact.png';
import portfolio from '../assest/sidebar/portfolio.png';
import services from '../assest/sidebar/services.png';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [hamburgerr, setHamburger] = useState(false);
    const [activePage, setActivePage] = useState("Home");

    const sidebarLinks = [
        { name: "Home", path: "/", icon: home },
        { name: "About", path: "/about", icon: about },
        { name: "Services", path: "/services", icon: services },
        { name: "Portfolio", path: "/portfolio", icon: portfolio },
        { name: "Client", path: "/client", icon: client },
        { name: "Contact Us", path: "/contactus", icon: contact },
    ];

    // Combined click handler
    const handleLinkClick = (section) => {
        setHamburger(false); 
        setActivePage(section); 
    };

    return (
        <div className="sider-bar">

            <div className="nav-bar">
                <img className="nav-logo" src={logo} alt="logo" />
                <i
                    onClick={() => setHamburger(!hamburgerr)}
                    className={`ri-menu-line ${hamburgerr ? 'open' : ''}`}
                ></i>
            </div>

            <div className={`sidebar-list-outer navbar ${hamburgerr ? 'active' : ''}`}>
                <div className="list-wrapper">
                    {sidebarLinks.map(({ name, path, icon }) => (
                        <NavLink
                            key={name}
                            to={path}
                            onClick={() => handleLinkClick(name)}
                            className={`sidebar-icon-wrapper ${activePage === name ? 'activeSection' : ''} ${name === "Home" ? 'home' : ''}`}
                        >
                            <img
                                className={activePage === name ? 'activeImage' : ''}
                                src={icon}
                                alt={name}
                            />
                            <p>{name}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
