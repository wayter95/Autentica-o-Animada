import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './style.css'
const Products = () => {
    return (
        <div>
            <Sidebar />
            <Header title="Produtos" />
            <div>
                <h1>Produtos</h1>
            </div>
        </div>
    )
}

export default Products;