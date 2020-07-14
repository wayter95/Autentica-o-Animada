import React from 'react';
import Header from '../Header';
import Menu from '../Menu';

import Routes from '../routes';
import './style.css';

const Template: React.FC = () => {
    return(
        <div>
            <Menu title="Autenticação Animada"/>
            <Header title="Dashboard"/>
            <div className="">
                <Routes />
            </div>
        </div>
    )
}

export default Template;