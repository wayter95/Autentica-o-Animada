import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './style.css'
const Categorys = () => {
    return (
        <div>
            <Sidebar />
            <Header title="Categorias" />
            <div>
                <h1>Categorys</h1>
            </div>
        </div>
    )
}

export default Categorys;