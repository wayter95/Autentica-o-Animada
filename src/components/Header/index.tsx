import React from 'react';
import './style.css'

const Header = (props: any) => {
    return (
        <div id="component-header">
        <section className="header">
            <h1>{props.title}</h1>
        </section>
        <section className="menu-bar">
        <h1>{props.title}</h1>
        </section>
        </div>
    )
}

export default Header;