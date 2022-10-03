import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types"

// const initialState = {
//     logged: false
// }

const init = () => {
  const name = JSON.parse(localStorage.getItem('name'));

  return {
    logged: !!name, 
    name: name,
  }
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer( authReducer, {}, init );

    const login = ( user = '') => {
      
      const name = { id:'ABC', name: user};
      const action = {type: types.login, payload: name}

      localStorage.setItem( 'name', JSON.stringify( name ));

      dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('name');
      const action = {type: types.logout};
      dispatch(action);
    }

  return (
    <AuthContext.Provider value={{       
      ...state,
      login: login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  );
}
