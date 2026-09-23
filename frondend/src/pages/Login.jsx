import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contex/UserContex';
import axiosAPI from '../api/axios'

const Login = () => {
  let {user , dispatch} = useContext(UserContext);  
 
  let [email , setEmail] = useState('');
  let [password , setPassword] = useState('');
  let [errors , setErrors] = useState('');
  let navigate = useNavigate();

  let login = async(e)=>{
    try{
      e.preventDefault();
      let data = {email , password} ;
      let res = await axiosAPI.post("/api/users/login", data , {withCredentials : true})

      if(res.status == 200){
        dispatch({type : 'LOGIN', payload : res.data.user})
        navigate('/')
      }

    }catch(e){
      console.log(e);
      if(e.response){
        setErrors(e.response.data.errors)
      }else{
        setErrors("Network error...")
      }      
      
    }

  }
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={login} className="space-y-6 shadow-md rounded-lg bg-white p-8">
            <h1 className='text-2xl text-gray-800 font-semibold text-center'>Login Form</h1>
            <div>
              <label className="block text-sm/6 font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder='example@gmail.com'
                  className="block w-full rounded-md placeholder:text-gray-500 border border-green-600 focus:outline-green-600 shadow-md p-2"
                />
                {!! (errors?.email) && <p className='text-sm text-red-600'>{errors.email}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-700">
                  Password
                </label>                
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder='Please enter password'
                  className="block w-full rounded-md placeholder:text-gray-500 border border-green-600 focus:outline-green-600 shadow-md p-2"
                />
                {!! (errors?.password) && <p className='text-sm text-red-600'>{errors.password}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-gray-700 hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <Link to="/register" className="font-semibold text-green-400 hover:text-green-300">
              Register Here !
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
