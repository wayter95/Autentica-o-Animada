import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './style.css'
const Reports = () => {
    return (
        <div>
            <Sidebar />
            <Header title="Relatorios" />
            <div>
                <h1>Relatorios</h1>
            </div>
        </div>
    )
}

export default Reports;