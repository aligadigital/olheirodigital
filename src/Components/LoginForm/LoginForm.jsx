import './LoginForm.css';
import logo from '../Assets/Olheiro_Digital_Logo_1.png'

const  LoginForm = () => {
    return (
    <>
    <div className='wrapper active'>
    <div className='form-box login '>
      <form onSubmit="">
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
          <label>
            <input type='checkbox' id='remember-me' />
           Lembre-se de mim!
          </label>
          <a href='./LoginForm.jsx'>Esqueci a senha</a>
        </div>
          <button type='Submit'>ENTRAR</button>
      </form>
    </div>
    </div>
    

    </>
    );
  }

export default LoginForm;
/*
Set Token session
https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5
 setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
 */