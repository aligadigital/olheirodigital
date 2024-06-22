import './Register.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import  Previews from '../../Utils/DropZone'
import Bonecao from '../../../WebComponent/GrupoComponent'

function PlayerRegister()  {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/player/register');
    };
    return (
    <>
    <a href='../../LoginForm/LoginForm.jsx'>
    <Bonecao></Bonecao></a>
    <div className="wrapper-cadastro">
      <div className="title">CADASTRO ATLETA</div>
      <div className="form-box-cadastro">
        <form onSubmit={handleSubmit}>
          
        <div className="input-2-col">
          <div className="preview-column">
            <Previews/>
          </div>
          <div className="input-column">
            <div className="input-box-register">
              <input type="text" id="name" name="nome" placeholder="nome" />
              <label className="place" htmlFor='name'>Nome</label>
            </div>
            <div className="input-box-register">
              <input type="text" id="sobrenome" name="sobrenome" placeholder="nome" />
              <label className="place" htmlFor='sobrenome'>SobreNome</label>
            </div>
            <div className="input-box-register">
              <input type="text" id="apelido" name="apelido" placeholder="nome" />
              <label className="place" htmlFor='apelido'>Apelido</label>
            </div>
            <div className="input-box-register data-input">
             <InputMask
                mask="99/99/9999"
                placeholder="Data Nascimento"
                name="DtNasc"
                id='dtnasc'
                maskChar={null}
              >
                {(inputProps) => <input {...inputProps} type="text" />}
              </InputMask>
              <label className="place" htmlFor='dtnasc'>Data Nascimento</label>
            </div>
          </div>
        </div>
        
          
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="email" placeholder="email" id="email"/>
              <label className="place" htmlFor='email'>email</label>
            </div>
          </div>
          <div className="input-row">
          
            </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="Rua" placeholder="Rua" id="rua" />
              <label className="place" htmlFor='rua'>Rua</label>
            </div>
            <div className="input-box-register short-input">
              <input type="text" name="NumeroRua" placeholder="Numero" id='nrcasa' />
              <label className="place" htmlFor='nrcasa'>Numero</label>
            </div>
            </div>
          <div className="input-row">
          <div className="input-box-register medium-input">
              <input type="text" name="CEP" placeholder="CEP" id="cep" />
              <label className="place" htmlFor='cep'>CEP</label>
            </div>
            <div className="input-box-register">
              <input type="text" name="Cidade" placeholder="Cidade" id="cidade"/>
              <label className="place" htmlFor='cidade'>Cidade</label>
            </div>
            
          </div>
          <div className="input-row">
          <div className="input-box-register">
              <input type="text" name="Bairro" placeholder="Bairro" id="bairro"/>
              <label className="place" htmlFor='bairro'>Bairro</label>
            </div>
            <div className="input-box-register short-input">
              <input type="text" name="Estado" placeholder="Estado" id="estado"/>
              <label className="place" htmlFor='estado'>Estado</label>
            </div>
        
            <div className="input-box-register  medium-input">
              <input type="text" name="Telefone" placeholder="Telefone" id="telefone" />
              <label className="place" htmlFor='telefone'>Telefone</label>
            </div>
          </div>
          <div className="input-row">
               <div className="input-box-register">
              <input type="text" name="Senha" placeholder="Senha" id="senha" />
              <label className="place" htmlFor='senha'>Senha</label>
            </div>
            </div>
          <div className="input-row">
            <div className="input-box-register">
              <input type="text" name="Senha1" placeholder="Digite novamente a senha" id="senha1"/>
              <label className="place" htmlFor='senha1'>Digite novamente a senha</label>
            </div>
          </div>
            <div className="input-box-register">
            <label >
              <input type="checkbox" name="Termo" placeholder="Termo"/>
              Declaro que li os termos de uso do usuário
            </label>
          </div>
          <div className="input-box-register">
            <div className="input-button">
              <button type='submit'>CADASTRAR</button>
            </div>
          </div>       
        </form>
      </div>
    </div>

    </>
    );
}

export default PlayerRegister;