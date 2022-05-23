import React from 'react';
import Auth from '../components/auth/Auth';
import { useAuth } from '../contexts/AuthContextProvider';
import HomePage from './HomePage';

const AuthPage = () => {
  const {
    user: { email },
  } = useAuth();
  return <div className='auth-container'>{email ? <HomePage /> : <Auth />}</div>;


};

export default AuthPage;
