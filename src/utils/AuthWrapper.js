import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AuthWrapper = () => {
  const isExpired = (token, email) => {
    if (token && email && token !== '' && email !== '') {
      axios
        .post(
          'https://324ttxcuga.execute-api.ap-south-1.amazonaws.com/prod/verify',
          {
            email: email,
            token: token,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            return false;
          } else {
            return true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return true;
    }
  };

  return isExpired(
    localStorage.getItem('token'),
    localStorage.getItem('email')
  ) ? (
    <Navigate to="/login" replace />
  ) : (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:min-w-min md:w-[19%] dark:bg-black">
        <Sidebar />
      </div>
      <div className="md:min-w-[81%]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthWrapper;
