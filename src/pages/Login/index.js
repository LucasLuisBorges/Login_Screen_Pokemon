import React, { useState } from "react";
import './login.css';

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  return (
    <div className="login">
      <div className="Login-logo">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png" 
          alt="pokemoon" 
        />
      </div>

      <div className="Login-right">
        <h1>Acessar Conta</h1>

        <div className="Login-InputEmail">
          <MdEmail />
          <input 
            type="email"
            placeholder="Digite um email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="Login-InputPassword">
          <MdLock />
          <input 
            type={show ? "text" : "password"}
            placeholder="Digite sua senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        <div className="Login-eye">
          {show ? (
            <HiEye 
              size={20}
              onClick={handleClick}
            />
          ) : (
            <HiEyeOff 
              size={20}
              onClick={handleClick}
            />
          )}
        </div>

        </div>
        <button type="submit"> {/*Loga na conta e entra na tela da home*/}
          Entrar
        </button>

        <h4>Não tenho conta!</h4>

        <div className="Link-area">
        <li><Link to="register">Cadastrar</Link></li>
        </div>

      </div>
    </div>
  )
}

export default Login;