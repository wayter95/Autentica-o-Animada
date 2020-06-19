import React from 'react';
import './style.css'
import {FaUserCircle,FaBell} from 'react-icons/fa';

interface HeaderProps {
    title: string;
}
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div id="component-header">
            <header>
                <h1>{props.title}</h1>
                <label  className="iconUser"  ><FaUserCircle size="40"/></label>
                <label className="userName">User Name</label>
                <label className="iconAlert">
                    <FaBell size="30"/>
                </label>
                <span>2</span>
            </header>
        </div>
    )
}

export default Header;