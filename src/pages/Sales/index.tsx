import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './style.css'
const Sales = () => {
    return (
        <div>
            <Sidebar />
            <Header title="Vendas" />
            <div>
                <h1>Vendas</h1>
            </div>
        </div>
    )
}

export default Sales;