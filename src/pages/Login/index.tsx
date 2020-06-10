import React from 'react';
import './style.css';

import logo from '../../assets/logo-login.svg';

const Login = () => {
    return (
       <div id="page-login">
           <div className="content">
               <img src={logo} alt="Autenticação Animada"/>
           </div>
       </div>
    )
}

export default Login;