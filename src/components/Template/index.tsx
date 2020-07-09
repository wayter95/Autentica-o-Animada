import React from 'react';
import Header from '../Header';
import Menu from '../Menu';

import './style.css';

const Template: React.FC = () => {
    return(
        <div>
            <Menu title="Autenticação Animada"/>
            <Header title="Dashboard"/>
        </div>
    )
}

export default Template;