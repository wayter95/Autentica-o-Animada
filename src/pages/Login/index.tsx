import React from 'react';
import './style.css';

import logo from '../../assets/logo-login.svg';

const Login = () => {
    return (
       <div id="page-login">
           <div className="container">
           <img src={logo} alt="Autenticação Animada"/>
           <div className="content">
               <form>
                   <input type="email" placeholder="E-mail"/>
                   <input type="password" placeholder="Senha"/>
                   <a href="">Esqueci minha senha</a>
                   <button className="btn">ENTRAR</button>
                   <label htmlFor="">_____________ ou _____________</label>
                   <button className="btn">FACEBOOK</button>
                   <a href="">Não tem uma conta? <strong>Resgistre-se</strong></a>
               </form>
           </div>
           </div>
       </div>
    )
}

export default Login;