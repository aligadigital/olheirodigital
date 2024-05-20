import './Register.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerRegister()  {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/player/register');
    };
    return (
    <>
    <div className="wrapper-cadastro">
      <div className="title">CADASTRO</div>
      <div className="form-box-cadastro">
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="nome" placeholder="nome" />
              <label className="place">Nome</label>
            </div>
            <div className="input-box-register">
              <input type="text" name="sobrenome" placeholder="sobrenome" />
              <label className="place">Sobrenome</label>
            </div>
          </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="email" placeholder="email" />
              <label className="place">email</label>
            </div>
            <div className="input-box-register">
              <input type="text" name="CPF" placeholder="CPF" />
              <label className="place">CPF</label>
            </div>

          </div>
          <div className="input-row">
          <div className="input-box-register medium-input">
              <input type="text" name="DtNasc" placeholder="Data Nascimento" />
              <label className="place">Data Nascimento</label>
            </div>
            </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="Rua" placeholder="Rua" />
              <label className="place">Rua</label>
            </div>
            <div className="input-box-register short-input">
              <input type="text" name="NumeroRua" placeholder="Nro"  />
              <label className="place">Nro</label>
            </div>
            </div>
          <div className="input-row">
          <div className="input-box-register medium-input">
              <input type="text" name="CEP" placeholder="CEP" />
              <label className="place">CEP</label>
            </div>
            <div className="input-box-register">
              <input type="text" name="Cidade" placeholder="Cidade" />
              <label className="place">Cidade</label>
            </div>
            
          </div>
          <div className="input-row">
          <div className="input-box-register">
              <input type="text" name="Bairro" placeholder="Bairro" />
              <label className="place">Bairro</label>
            </div>
            <div className="input-box-register short-input">
              <input type="text" name="Estado" placeholder="Estado" />
              <label className="place">Estado</label>
            </div>
        
            <div className="input-box-register  medium-input">
              <input type="text" name="Telefone" placeholder="Telefone" />
              <label className="place">Telefone</label>
            </div>
          </div>
          <div className="input-row">
               <div className="input-box-register">
              <input type="text" name="Senha" placeholder="Senha" />
              <label className="place">Senha</label>
            </div>
            </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="Senha1" placeholder="Digite novamente a senha" />
              <label className="place">Digite novamente a senha</label>
            </div>
          </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="checkbox" name="Termo" placeholder="Termo" />
              <label >Declaro que li os termos de uso do usuário</label>
            </div>
          </div>
        </form>
      </div>
    </div>

    </>
    );
}

export default PlayerRegister;