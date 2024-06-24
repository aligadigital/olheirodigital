import './Register.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Fields from '../../Utils/Fields/Fileds'

function Register()  {
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
            <Fields name='nome' text='Nome'></Fields>
            <Fields name='sobrenome' text='Sobrenome'></Fields>
          </div>
          <div className="input-row">
          <Fields name='email' text='email'></Fields>
          <Fields name='cpf' text='CPF'></Fields>
          </div>
          <div className="input-row">
          <div className="input-box-register medium-input">
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

          <div className="input-row">
            <Fields name='rua' text='Rua'></Fields>
            <Fields name='nrcasa' text='Numero'></Fields>
            
          </div>
          <div className="input-row">
          <Fields name='cep' text='CEP' size='medium'></Fields>
          <Fields name='cidade' text='Cidade'></Fields>
           
          </div>
          <div className="input-row">
            <Fields name='bairro' text='CEP' size='medium'></Fields>
            <Fields name='Estado' text='Estado' size='small'></Fields>
            <Fields name='telefone' text='Telefone' size='medium'></Fields>
          </div>
          <div className="input-row">
          <Fields name='password' text='Senha' ftype='password'></Fields>
            
            </div>
          <div className="input-row">
          <Fields name='checkpassword' text='Digite novamente a senha' ftype='password'></Fields>
          </div>
          <Fields name='Termo' text='Declaro que li os termos de uso do usuário' ftype='checkbox'></Fields>
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

export default Register;