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
       <div className='wrapper-cadastro'>
        <div className="title">CADASTRO</div>
        <div className='form-box-cadastro'>
            <form onSubmit={handleSubmit}>
               <div className='col2'>
               <div className='input-box-register'>
                    <input type='text' name='nome' placeholder='nome'/>
                    <label className='place'>Nome</label>
               </div>
               <div className='input-box-register'>
                    <input type='text' name='sobrenome' placeholder='nome'/>
                    <label className='place'>Sobrenome</label>
               </div>
               </div>
               <div className='col3'>
               <div className='input-box-register'>
                    <input type='text' name='email' placeholder='nome'/>
                    <label className='place'>email</label>
               </div>
               <div className='input-box-register'>
                    <input type='text' name='CPF' placeholder='nome'/>
                    <label className='place'>CPF</label>
               </div>
               <div className='input-box-register'>
                    <input type='text' name='RG' placeholder='nome'/>
                    <label className='place'>RG</label>
               </div>
               </div>
            </form>
        </div>
       </div>

    </>
    );
}

export default PlayerRegister;