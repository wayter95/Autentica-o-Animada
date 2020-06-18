import React from 'react';
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';
import logo from '../../assets/logo-login.svg';

import './style.css';

const Register = () => {
    return (
        <div id="page-register">

            <img src={logo} alt="Autenticação Animada" />
            <div className="content">
                <form>
                    <div className="InputWithIcons">
                        <label className="icon">
                            <FiUser size="30" />
                        </label>
                        <input type="text" placeholder="Nome" />
                    </div>
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
                    <div className="InputWithIcons">
                        <label className="icon">
                            <FiCalendar size="30" />
                        </label>
                        <input type="date" placeholder="Data de Nascimento" />
                    </div>
                    <button className="btn" id="entrar" type="submit">CONTINUAR</button>

                    <Link to="/">Voltar</Link>
                </form>
            </div>
        </div>
    )
}

export default Register;