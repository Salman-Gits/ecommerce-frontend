import './RegisterForm.css'
import React, {  useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from 'axios';
import LiquidEther from './LiquidEther';
// import two from './two.jpg'


const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState(''); 

  async function handleLogin(e) {
    if (name && email && password) {
      e.preventDefault();
      try {
        await axios.post("https://ecommerce-backend-2sm5.onrender.com/api/register", {
          employeename: name,   // ✅ FIXED
          email: email,
          password: password,
        

      });
      alert("registration successfull");

    } catch (error) {
      alert('Error during login: ' + error.message);
    }
  }
}
return (
   <div style={{ width: '100%', height: "100vh", position: 'relative' }}>
     <LiquidEther
      colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
      mouseForce={20}
      cursorSize={100}
      isViscous
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
      color0="#5227FF"
      color1="#FF9FFC"
      color2="#B497CF"
  />

  <div>
    <div className='Wrapper1'>
      <div className='form-box register'>
        <form onSubmit={handleLogin}>
          <h1>Registration</h1>
          <div className='input-box'>
            <input type="text"
              placeholder='Name' value={name}
              onChange={(e) => setUsername(e.target.value)} required /> <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="email"
              placeholder='Email' value={email}
              onChange={(e) => setEmail(e.target.value)} required /> <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type="password"
              placeholder='password' value={password}
              onChange={(e) => setPassword(e.target.value)} required /> <FaLock className='icon' />
          </div>
          <div className='remember-forgot'>
            <label>
              <input type="checkbox" /> I agree to the terms & conditions</label>
          </div>

          <button onClick={handleLogin} type='submit'>Register</button>

          <div className='register-link'>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
      {/* <LoginRegister email={email} password={password}/> */}
    </div>
  </div>
  </div>
)
   }

export default RegisterForm



