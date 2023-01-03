const Portfolio = () => {
  return (
    <div className="transition-all duration-500 py-4 px-6 bg-[#F7FAFC] dark:bg-black min-h-screen w-full md:p-8 mb-16 md:mb-0">
      <p className="font-semibold text-3xl mb-5 md:mb-10 dark:text-white">
        My Dashboard
      </p>
      <div className="md:mt-10">
        <img
          alt="dashboard"
          className="rounded-xl h-44 w-full"
          src={'https://getstake.com/images/DashboardBg.png'}
        />
        <div className="flex flex-col md:flex-row">
          <div className="transition-all duration-200 mx-8 -mt-8 bg-white p-4 rounded-xl hover:-translate-y-2 cursor-pointer">
            <p className="font-bold text-xl">AED 12,900</p>
            <p className="font-base text-slate-500">Total Account Value</p>
          </div>
          <div className="transition-all duration-200 mx-8 mt-2 md:-mt-8 bg-white p-4 rounded-xl hover:-translate-y-2 cursor-pointer">
            <p className="font-bold text-xl">AED 14,560</p>
            <p className="font-base text-slate-500">Realised Earnings</p>
          </div>
          <div className="transition-all duration-200 mx-8 mt-2 md:-mt-8 bg-white p-4 rounded-xl hover:-translate-y-2 cursor-pointer">
            <p className="font-bold text-xl">56.00%</p>
            <p className="font-base text-slate-500">Annualised Rental Yield</p>
          </div>
          <div className="transition-all duration-200 mx-8 mt-2 md:-mt-8 bg-white p-4 rounded-xl hover:-translate-y-2 cursor-pointer">
            <p className="font-bold text-xl">AED 80,000</p>
            <p className="font-base text-slate-500">Available Balance</p>
          </div>
        </div>
        <p className="font-semibold text-2xl mt-8 dark:text-white">
          My Investements
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="transition-all duration-200 md:w-1/3 bg-white rounded-xl p-4 mt-4 md:mr-4 dark:bg-slate-800 cursor-pointer hover:scale-110">
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Property ID
              </span>
              <span className="text-black font-bold dark:text-white">
                321 Palm Residency
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Blocks Owned
              </span>
              <span className="text-black font-bold dark:text-white">
                42 (25%)
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Investment
              </span>
              <span className="text-black font-bold dark:text-white">
                301,000 AED
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Remarks
              </span>
              <span className="text-black font-bold dark:text-white">
                Rental Yeild
              </span>
            </p>
          </div>
          <div className="transition-all duration-200 md:w-1/3 bg-white rounded-xl p-4 mt-4 md:mx-4 dark:bg-slate-800 cursor-pointer hover:scale-110">
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Property ID
              </span>
              <span className="text-black font-bold dark:text-white">
                321 Palm Residency
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Blocks Owned
              </span>
              <span className="text-black font-bold dark:text-white">
                42 (25%)
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Investment
              </span>
              <span className="text-black font-bold dark:text-white">
                301,000 AED
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Remarks
              </span>
              <span className="text-black font-bold dark:text-white">
                Rental Yeild
              </span>
            </p>
          </div>
          <div className="transition-all duration-200 md:w-1/3 bg-white rounded-xl p-4 mt-4 md:ml-4 dark:bg-slate-800 cursor-pointer hover:scale-110">
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Property ID
              </span>
              <span className="text-black font-bold dark:text-white">
                321 Palm Residency
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Blocks Owned
              </span>
              <span className="text-black font-bold dark:text-white">
                42 (25%)
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Investment
              </span>
              <span className="text-black font-bold dark:text-white">
                301,000 AED
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Remarks
              </span>
              <span className="text-black font-bold dark:text-white">
                Rental Yeild
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
