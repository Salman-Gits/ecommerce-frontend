import React, { useEffect, useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import one from './one.jpg'

// axios.post.withCredentials=true;

const LoginRegister = () => {

  useEffect(()=>{
    document.body.style.backgroundImage= `url(${one})`;
  },[])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  // axios.defaults.withCredentials=true;

  async function handleLogin(e) {
    if (email && password) {
      e.preventDefault();
      try {
        await axios.post("https://ecommerce-backend-2sm5.onrender.com/api/login", {
          email: email,
          password: password,
        }).then((res) => {
          console.log(res.data);

          if (res.data.message == "Login Success") {
            navigate('/home');
            alert("Login Success");
          }
          else if (res.data.message == "Email not exits") {
            alert("email not exist")
          }

          else {
            alert("Incorrect Email and Password not match");
          }
        }, fail => {
          console.error(fail); // Error!
        });
      }

      catch (err) {
        alert(err);
      }

    }

  }
  return (
    <div>
    <div className='Wrapper' >
      <div className='form-box login'>
        <form  >
          <h1>Login</h1>
          <div className='input-box1'>
            <input type="email"
              placeholder='Email' value={email}
              onChange={(e) => setEmail(e.target.value)} required /> <FaUser className='icon' />
          </div>
          <div className='input-box1'>
            <input type="password"
              placeholder='password' value={password}
              onChange={(e) => setPassword(e.target.value)} required /> <FaLock className='icon' />
          </div>

          <div className='remember-forgot'>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button onClick={handleLogin} type='submit'>Login</button>
          <div className='register-link'>
            <p>Don't have an account? <a href="/register" >Register</a></p>
          </div>
        </form>
      </div>
    </div>
    </div>

  )

}
export default LoginRegister