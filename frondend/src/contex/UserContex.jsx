import { createContext, useEffect, useReducer } from "react";

const UserContext = createContext();

let AuthenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem('user' , JSON.stringify(action.payload))    //store in browser
      return { user: action.payload };
    case "LOGOUT":
      localStorage.removeItem('user')   //remove localstorage
      return { user: null };
    default:
      state;
  }
};

const UserContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AuthenticationReducer, {
    user: null,
  });

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('user'))

    if(user){
        dispatch({ type : 'LOGIN' , payload : user })
    }else{
        dispatch({ type : 'LOGOUT'})
    }

  },[])

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
