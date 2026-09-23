import React, { useContext } from 'react'
import { Link,useNavigate } from "react-router-dom";
import axiosAPI from '../api/axios'
import { UserContext } from '../contex/UserContex';

const NavBar = () => {
    let {user , dispatch} = useContext(UserContext);
    let navigate = useNavigate();
    let logout = async()=>{
    let res = await axiosAPI.post("/api/users/logout")
        if(res.status == 200){
            dispatch({type : 'LOGOUT', payload : res.data.user})
            navigate('/login');
            }   
        }
        
  return (
    <div>
      <nav className="bg-green-800 p-4">
        <div className=" mx-auto">
          <div className="text-white font-semibold px-5 flex items-center justify-between">
            <Link to="/" className="text-yellow-50 text-2xl">
              News Media
            </Link>
            <div className="space-x-6">
                { user && (
                <>
                    <Link to="/" className="text-yellow-50 text-lg hover:text-yellow-200:">Home</Link>
                    <Link to="/createNews" className="text-yellow-50 text-lg hover:text-yellow-200:">Create News</Link>
                </>
              )
              }
              
              { !user && (
                <>
                    <Link to="/login" className="text-yellow-50 text-lg hover:text-yellow-200:">Login</Link>
                    <Link to="/register" className="text-yellow-50 text-lg hover:text-yellow-200:">Register</Link>
                </>
              )
              }
              {!!user && (<button className="text-yellow-50 text-lg hover:text-yellow-200:" onClick={logout}>Logout</button>)}             

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
