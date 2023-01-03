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
    <div className="transition-all duration-500 border-r-[1px] md:min-h-screen md:py-5 dark:bg-black">
      <div className="flex justify-between md:px-4 pb-4 border-b-[1px]">
        <p className="font-extrabold text-black text-center text-2xl dark:text-white">
          Prypto
        </p>
        <input
          type="checkbox"
          onChange={switchTheme}
          defaultChecked={localStorage.getItem('theme') === 'dark'}
        />
      </div>
      <div className="border-b-[1px] pb-3">
        <div className="px-2 my-auto">
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-house my-auto mr-3 w-[20px]" />
            Properties
          </NavLink>
        </div>
        <div className="px-2 my-auto">
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-wallet my-auto mr-3 w-[20px]" />
            Wallet
          </NavLink>
        </div>
        <div className="px-2 my-auto">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-tag my-auto mr-3 w-[20px]" />
            Portfolio
          </NavLink>
        </div>
        <div className="px-2 my-auto">
          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-star my-auto mr-3 w-[20px]" />
            Rewards
          </NavLink>
        </div>
        <div className="px-2 my-auto">
          <NavLink
            to="/myprofile"
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-black bg-[#E9FBF5] dark:text-white dark:bg-blue-500'
                : 'transition-all duration-100 mt-5 rounded-md py-2 px-3 flex text-md text-slate-700 hover:bg-[#E9FBF5] dark:text-white dark:hover:bg-blue-500'
            }
          >
            <i className="fa fa-user my-auto mr-3 w-[20px]" />
            My Profile
          </NavLink>
        </div>
      </div>
      <div className="px-2 my-auto">
        <button
          className="transition-all duration-100 w-full px-3 text-left mt-5 rounded-md py-2 text-md text-black dark:text-white dark:hover:bg-red-500 hover:text-red-500"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket my-auto mr-3 w-[20px]"></i>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
