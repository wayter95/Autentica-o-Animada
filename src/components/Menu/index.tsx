import React from 'react';
import {MdDashboard} from 'react-icons/md';
import {FaCashRegister,FaShapes,FaProductHunt,FaClipboardList} from 'react-icons/fa'

import './style.css';

interface MenuProps {
    title: string;
    url?: string;
}

const Menu: React.FC<MenuProps> = (props) => {
    return(
        <div id="component-menu">
            <section>
            <h1>{props.title}</h1>
           <ul>
               <li>
                   <MdDashboard size={30}/>
                   <label>Dashboard</label>
               </li>
               <li>
                   <FaCashRegister size={30} />
                   <label>Vendas</label>
               </li>
               <li>
               <FaShapes size={30} />
                   <label>Categorias</label>
               </li>
               <li>
                   <FaProductHunt size={30} />
                   <label>Produtos</label>
               </li>
               <li>
                   <FaClipboardList size={30} />
                   <label>Relatorios</label>
               </li>
           </ul>
            </section>
        </div>
    )
}

export default Menu;