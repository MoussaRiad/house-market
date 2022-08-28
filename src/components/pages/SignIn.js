import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate =useNavigate()
  return (
    <div>
    <div className='backgraound'>
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
    </div>
    <div className='box'>
      <div className='squares'>
        <div className='square' style={{'--i':1}}></div>
        <div className='square' style={{'--i':2}}></div>
        <div className='square' style={{'--i':3}}></div>
        <div className='square' style={{'--i':4}}></div>
        <div className='square' style={{'--i':5}}></div>
      </div>
      <div className='form-container'>
        <div className='form-header'>
          <h1>Sign In</h1>
        </div>
        <div className='form-body'>
          <form>
            <div className='form-input'>
              <input type={'email'} placeholder='Email'/>
            </div>
            <div className='form-input'>
              <input type={'password'} placeholder='Password'/>
            </div>
            <div className='form-input'>
              <input type={'submit'} value={'Login'}/>
            </div>
          </form>
        </div>
        <div className='form-footer'>
          <h3>Forgot password? <span className='link' onClick={()=>navigate('/forgot-password')}>Click Here</span></h3>
          <h3>Don't have an account? <span className='link' onClick={()=>navigate('/sign-up')}>Sign Up</span></h3>
        </div>
      </div>
    </div>
    </div>
  )
}
