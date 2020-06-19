import React from 'react';

import './style.css';

interface MenuProps {
    title: string;
    url?: string;
}

const Menu: React.FC<MenuProps> = (props) => {
    return(
        <div id="component-menu">
            <section>
            <a href="/home">{props.title}</a>
            </section>
        </div>
    )
}

export default Menu;