import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClickPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleClickConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirm(!showConfirm);
  };

  const checarSenha = () => {
    if (password !== confirm_password) {
      alert("As senhas não se conhecidem");
      return;
    } else if (!password || !email || !confirm_password) {
      alert("Todos os campos devem ser preenchidos");
      return;
    }
    console.log("Fora");
  };

  return (
    <div className="login2">
      <div className="Login-logo2">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png"
          alt="pokemoon"
        />
      </div>

      <form>
        <div className="Login-right2">
          <h1>Criar Conta</h1>

          <div className="Login-InputEmail2">
            <MdEmail />
            <input
              type="text"
              placeholder="Digite um email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="Login-InputPassword2">
            <MdLock />
            <input
              name="password"
              id="password"
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="Login-eye2">
              {show ? (
                <HiEye size={20} onClick={handleClickPassword} />
              ) : (
                <HiEyeOff size={20} onClick={handleClickPassword} />
              )}
            </div>
          </div>

          <div className="Login-InputPassword2">
            <MdLock />
            <input
              name="confirm_password"
              id="confirm_password"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="Login-eye2">
              {showConfirm ? (
                <HiEye size={20} onClick={handleClickConfirmPassword} />
              ) : (
                <HiEyeOff size={20} onClick={handleClickConfirmPassword} />
              )}
            </div>
          </div>

          <button onClick={checarSenha}>Cadastrar</button>

          <h4>Já tem um conta?</h4>

          <div className="Link-area2">
            <li>
              <Link to="/">Entrar</Link>
            </li>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
