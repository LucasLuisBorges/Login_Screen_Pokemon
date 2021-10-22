import React, { useState } from "react";
import './home.css';

import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState("")


  return (
    <div className="login3">
      <div className="Login-logo3">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png" 
          alt="pokemoon" 
        />
      </div>

      <div className="Login-right3">
        <h1>Dados da Conta</h1>

        <div className="Dados3">
          <h2>Email:</h2>
          <h2>Senha:</h2>
        </div>

        <div className="Login-InputEmail3"> {/*Confirmar email para excluir a conta*/}
          <MdEmail />
          <input 
            type="email"
            placeholder="Digite um email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button type="submit"> {/*Excluir a conta*/}
          Excluir conta
        </button>

        <h4>Quer relogar?</h4>

        <div className="Link-area3">
        <li><Link to="/">Voltar</Link></li>
        </div>
      </div>
    </div>
  )
}

export default Home;