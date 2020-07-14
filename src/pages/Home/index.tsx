import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './style.css'
const Home = () => {
    return (
        <div>
            <Sidebar />
            <Header title="Dashboard" />
            <div>
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Home;