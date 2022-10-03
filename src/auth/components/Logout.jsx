import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Logout = () => {

  const {logout} = useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleLogout = () => {

    logout();

    navigate('/login', {
      replace: false
    });
  }

  return (
    <button className='nav-item nav-link btn bg-dark' onClick={ handleLogout }>logout</button>
  )
}

