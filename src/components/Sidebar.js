import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';

const root = window.document.documentElement;
const switchTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

const Sidebar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem('theme') ||
      localStorage.getItem('theme') === ''
    ) {
      localStorage.setItem('theme', 'light');
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      switchTheme();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate(APPLICATION_URLS.LOGIN_PAGE);
  };

  return (
    <div className="transition-all w-full py-2 duration-500 border-r-[1px] md:min-h-screen h-full md:py-5 dark:bg-black">
      <div className="hidden md:flex justify-between md:px-4 pb-4 border-b-[1px]">
        <p className="font-extrabold text-black text-center text-2xl dark:text-white">
          Prypto
        </p>
        <input
          type="checkbox"
          onChange={switchTheme}
          defaultChecked={localStorage.getItem('theme') === 'dark'}
        />
      </div>
      <div className="fixed bottom-0 z-[999] md:static md:inset-0 py-2 bg-white dark:bg-black flex w-full md:flex-col md:border-b-[1px] md:pb-3 justify-between">
        <div className="px-1 w-1/5 md:w-full my-auto">
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-house my-auto md:mr-3 mx-auto md:mx-0 w-[20px] text-base" />
            Properties
          </NavLink>
        </div>
        <div className="px-1 w-1/5 md:w-full my-auto">
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-wallet my-auto md:mr-3 mx-auto md:mx-0 w-[20px] text-base" />
            Wallet
          </NavLink>
        </div>
        <div className="px-1 w-1/5 md:w-full my-auto">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-tag my-auto md:mr-3 mx-auto md:mx-0 w-[20px] text-base" />
            Portfolio
          </NavLink>
        </div>
        <div className="px-1 w-1/5 md:w-full my-auto">
          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-star my-auto md:mr-3 mx-auto md:mx-0 w-[20px] text-base" />
            Rewards
          </NavLink>
        </div>
        <div className="px-1 w-1/5 md:w-full my-auto">
          <NavLink
            to="/myprofile"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 text-center md:text-left mx-auto md:mx-0 mt-5 rounded-md py-2 md:px-3 flex flex-col md:flex-row text-xs md:text-base text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-user my-auto md:mr-3 mx-auto md:mx-0 w-[20px] text-base" />
            My Profile
          </NavLink>
        </div>
      </div>
      <div className="hidden md:block px-2 my-auto">
        <button
          className="transition-all duration-100 w-full px-2 text-left mt-5 rounded-md py-2 text-xs md:text-base text-black dark:text-white dark:hover:bg-red-500 hover:text-red-500"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket my-auto mr-3 w-[20px] text-base"></i>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
