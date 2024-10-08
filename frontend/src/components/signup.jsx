import React, { useState } from 'react';
import Image1 from '../images/image1.png';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://65.2.130.52:5001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'new_signup') {
          window.location.href = 'https://showtime-five.vercel.app/login';
        } else {
          window.location.href = 'https://showtime-five.vercel.app/login';
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='image_back h-screen overflow-hidden px-20 pt-1'>
      <div className='w-24'>
        <img src={Image1} alt="logo" />
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-center z-10'>
        <form onSubmit={handleSubmit} className='h-screen py-24 mt-16 w-5/5 px-28 bg-[#000000bb] text-white'>
          <h1 className='font-rubix text-white font-semibold text-4xl mb-10'>Sign Up</h1>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='w-96 rounded-md px-5 py-6 h-16 font-semibold text-xl bg-[#0f0f109c] border border-[#453738] mb-3'
          />
          <br />
          <div className="relative">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className='select-text w-96 rounded-md px-5 py-6 h-16 font-semibold text-xl bg-[#0f0f109c] border border-[#453738] mt-3 mb-3'
              autocomplete="off"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer" id="eye" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <RxEyeClosed className='hover:bg-[#3F3E3D] duration-300 transition-all rounded-full p-1' size={30} />
              ) : (
                <RxEyeOpen className='hover:bg-[#3F3E3D] duration-300 transition-all rounded-full p-1' size={30} />
              )}
            </span>
            <style>
              {`
                #eye {
                  padding: 10px;
                  font-size: 20px;
                }
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:active {
                  -webkit-box-shadow: 0 0 0 1000px #0f0f10 inset !important;
                  -webkit-text-fill-color: #fff !important;
                }
              `}
            </style>
          </div>
          <br />
          <button className='bg-[#E50914] w-96 text-white mt-3 h-14 md:rounded md:text-xl md:font-semibold md:hover:bg-[#ac1e25] transition-all duration-300 mb-6'>
            Sign Up
          </button>
          <br className='mb-20'/>
            <a href="https://showtime-five.vercel.app/login" className='text-red-500 underline-offset-4 underline'>Log In</a>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;