import React from 'react';
import {Link} from 'react-router-dom'
import { MdDashboard } from 'react-icons/md';
import { FaCashRegister, FaShapes, FaProductHunt, FaClipboardList } from 'react-icons/fa'

import './style.css';

const Menu: React.FC = () => {
    return (
        <div id="component-menu">
            <section>
                <h1>Autenticaão Animada</h1>
                <ul>
                    <li>
                        <Link to="/home">
                            <MdDashboard size={30} />
                            <label>Dashboard</label>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sales">
                            <FaCashRegister size={30} />
                            <label>Vendas</label>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorys">
                            <FaShapes size={30} />
                            <label>Categorias</label>
                        </Link>
                    </li>
                    <li>
                    <Link to="/products">
                        <FaProductHunt size={30} />
                        <label>Produtos</label>
                        </Link>
                    </li>
                    <li>
                    <Link to="/reports">
                        <FaClipboardList size={30} />
                        <label>Relatorios</label>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Menu;