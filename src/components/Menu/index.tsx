import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaCashRegister, FaShapes, FaProductHunt, FaClipboardList } from 'react-icons/fa'

import './style.css';

interface MenuProps {
    title: string;
    url?: string;
}

const Menu: React.FC<MenuProps> = (props) => {
    return (
        <div id="component-menu">
            <section>
                <h1>{props.title}</h1>
                <ul>
                    <li>
                        <button>
                            <MdDashboard size={30} />
                            <label>Dashboard</label>
                        </button>
                    </li>
                    <li>
                        <button>
                            <FaCashRegister size={30} />
                            <label>Vendas</label>
                        </button>
                    </li>
                    <li>
                        <button>
                            <FaShapes size={30} />
                            <label>Categorias</label>
                        </button>
                    </li>
                    <li>
                        <button>
                        <FaProductHunt size={30} />
                        <label>Produtos</label>
                        </button>
                    </li>
                    <li>
                        <button>
                        <FaClipboardList size={30} />
                        <label>Relatorios</label>
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Menu;