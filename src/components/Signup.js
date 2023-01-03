import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';
const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://wu9gxbv1r1.execute-api.ap-south-1.amazonaws.com/prod/signup',
        {
          email: values.email,
          password: values.password,
          name: values.name,
        }
      )
      .then((res) => {
        localStorage.setItem('email', values.email);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('name', values.name);
        navigate(APPLICATION_URLS.PROPERTIES);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="transition-all duration-500 p-12 overflow-hidden mx-auto min-h-screen bg-[#121C30] w-full md:p-36">
      <div className="bg-white text-black rounded-xl overflow-hidden text-white px-6 pb-12 md:px-12 shadow-xl md:w-[550px] mx-auto py-4">
        <form onSubmit={handleSubmit}>
          <p className="font-extrabold text-4xl text-black text-center my-4 md:my-8 text-xl">
            Prypto
          </p>
          <label className="text-base font-semibold text-black mt-0">
            Name
          </label>
          <br />
          <input
            className="focus:outline focus:border-green-500 border outline-transparent outline-offset-2 rounded-md md:w-30 py-3 w-full mt-2 text-black pl-4"
            type="text"
            required
            onChange={handleChange('name')}
            placeholder={'your name'}
            value={values.name}
          />
          <br />
          <br />
          <label className="text-base font-semibold text-black mt-0">
            Email Address
          </label>
          <br />
          <input
            className="focus:outline focus:border-green-500 border outline-transparent outline-offset-2 rounded-md md:w-30 py-3 w-full mt-2 text-black pl-4"
            type="email"
            required
            onChange={handleChange('email')}
            placeholder={'E.g. yourname@gmail.com'}
            value={values.email}
          />
          <br />
          <br />
          <label className="text-base font-semibold text-black">Password</label>
          <br />
          <input
            className="focus:outline focus:border-green-500 border outline-transparent outline-offset-2 rounded-md md:w-30 py-3 w-full mt-2 text-black pl-4"
            type="text"
            value={values.password}
            onChange={handleChange('password')}
            placeholder={'Enter your password'}
            required
          />
          <button
            type="submit"
            className="hover:bg-[#209476] mt-8 text-white py-3 rounded-md w-full bg-[#41CE8E] text-xl"
          >
            Signup
          </button>
          <p className="text-xs text-slate-400 mt-6">
            By clicking Log In you agree to Stake's Terms & Conditions and Key
            Risks
          </p>
        </form>
      </div>
      <p className="text-white text-center mt-5 font-base">
        Already have an account ?
        <span
          className="text-[#41CE8E] font-bold cursor-pointer ml-1 hover:underline"
          onClick={() => {
            navigate(APPLICATION_URLS.LOGIN_PAGE);
          }}
        >
          Login
        </span>
      </p>
      <p className="text-white text-center text-sm mt-3">Regulated by DSFA</p>
    </div>
  );
};
export default Signup;
