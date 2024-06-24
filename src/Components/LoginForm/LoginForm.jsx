import './LoginForm.css';
import logo from '../Assets/Olheiro_Digital_Logo_1.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/register');
  };
  return (
    <>
   {/* <Webs/> */}
    <div className='wrapper'>
    <div className='form-box'>
      <form onSubmit={handleSubmit}>
      <img src={logo} className='header-login' alt='Olheiro Digital'/>
      <div className='span-logintitle'>LOGIN</div>
        <div className='input-box'>
          <input type='text' name='email' placeholder='Password'/>
          <label className='place'>email</label>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' name='password' />
          <label className='place'>senha</label>
        </div>
        <div className="remember-forgot">
          <label className='remember-me'>
          <input type='checkbox' id='rememberme'/><span> Lembre-se de mim!</span>
          </label>
          <a href='./LoginForm.jsx'>Esqueci a senha</a>
        </div>
        <button type='submit'>ENTRAR</button>
      </form>
    </div>
    </div>
    

    </>
    );
  }

export default  LoginForm;
/*
Set Token session
https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5
 setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
 */