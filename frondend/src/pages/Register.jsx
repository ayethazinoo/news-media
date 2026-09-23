import axiosAPI from '../api/axios';
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Register = () => {
    let [name ,setName] = useState('');
    let [email ,setEmail] = useState('');
    let [password ,setPassword] = useState('');
    let [errors , setErrors] = useState('');
    let navigate = useNavigate();

    let register = async(e)=>{
        try{
            e.preventDefault();
            let data = { name , email , password };
            let res = await axiosAPI.post('/api/users/register',data , {withCredentials : true})
            if (res.status == 200){
                navigate('/')
            }
        }catch(e){            
            setErrors(e.response.data.errors)
        }
        
    }
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={register} className="space-y-6 shadow-md rounded-lg bg-white p-8">
            <h1 className='text-2xl text-gray-800 font-semibold text-center'>Register Form</h1>
            <div>
              <label className="block text-sm/6 font-medium text-gray-700">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={name}
                  onChange={e=>setName(e.target.value)}
                  placeholder='Enter your name...'
                  className="w-full rounded-md placeholder:text-gray-500 border border-green-600 focus:outline-green-600 shadow-md p-2"
                />
                {!!(errors && errors.name) && <p className='text-sm text-red-600'>{errors.name.msg}</p> }
              </div>
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  placeholder='example@gmail.com'
                  className="block w-full rounded-md placeholder:text-gray-500 border border-green-600 focus:outline-green-600 shadow-md p-2"
                />
                {!!(errors && errors.email) && <p className='text-sm text-red-600'>{errors.email.msg}</p> }
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
                  onChange={e=>setPassword(e.target.value)}
                  placeholder='Please enter password'
                  className="block w-full rounded-md placeholder:text-gray-500 border border-green-600 focus:outline-green-600 shadow-md p-2"
                />
                {!!(errors && errors.password) && <p className='text-sm text-red-600'>{errors.password.msg}</p> }
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-gray-700 hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            You can {' '}
            <Link to="/login" className="font-semibold text-green-400 hover:text-green-300">
              login Here !
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
