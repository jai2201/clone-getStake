import { React, useState } from 'react';

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem('name'));

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="transition-all duration-500 bg-[#F7FAFC] min-h-screen min-w-[81%] p-8 font-display dark:bg-black mb-16 md:mb-0">
      <p className="font-semibold text-3xl mb-10 dark:text-white">
        Personal Information
      </p>
      <div className="sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6 dark:bg-slate-800">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        autocomplete={localStorage.getItem('first_name')}
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        autocomplete={localStorage.getItem('last_name')}
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        disabled
                        value={localStorage.getItem('email')}
                        className="disabled:bg-white border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>UAE</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        for="street_address"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="city"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        className="block text-base font-medium text-gray-700 dark:text-white"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        className="border-transparent focus:border-transparent focus:ring-0 pl-3 border-[1px] py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md focus:outline-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-slate-800">
                  <button className="transition-all duration-200 w-36 py-2 text-white bg-[#41CE8E] rounded-xl hover:bg-[#209476] dark:bg-blue-500 dark:hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
