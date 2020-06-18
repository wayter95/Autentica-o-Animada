import React from 'react';
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiFacebook } from 'react-icons/fi';
import logo from '../../assets/logo-login.svg';

import './style.css';

const Login = () => {
    return (
        <div id="page-login">
            <img src={logo} alt="Autenticação Animada" />
            <div className="content">
                <form>
                    <div className="InputWithIcons">
                        <label className="icon">
                            <FiMail size="30" />
                        </label>
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="InputWithIcons">
                        <label className="icon">
                            <FiLock size="30" />
                        </label>
                        <input type="password" placeholder="Senha" />
                    </div>
                    <Link to="/">Esqueci minha senha</Link>
                    <button className="btn" id="entrar" type="submit">ENTRAR</button>
                    <label><hr /> <p>ou</p> <hr /></label>
                    <button className="btn" type="button" disabled>
                        <FiFacebook />
                            FACEBOOK</button>
                    <Link to="/register">Não tem uma conta? <strong>Registre-se</strong></Link>
                </form>
            </div>
        </div>
    )
}

export default Login;