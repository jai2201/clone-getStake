const Wallet = () => {
  return (
    <div className="transition-all duration-500 bg-[#F7FAFC] min-h-screen min-w-[81%] p-8 dark:bg-black">
      <p className="font-semibold text-3xl dark:text-white">Wallet</p>
      <div className="mt-10 flex justify-between">
        <div className="bg-white w-1/2 mr-3 p-8 py-9 rounded-xl flex justify-between dark:bg-slate-800">
          <div className="">
            <p className="text-slate-600 font-light text-xl mb-5 dark:text-white">
              Cash balance
            </p>
            <p className="text-black font-semibold text-4xl dark:text-white">
              AED 0
            </p>
          </div>
          <div>
            <button
              className="transition-all duration-200 w-36 py-2 text-white bg-[#209476] opacity-40 rounded-xl hover:bg-[#6DE1A1] cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
              disabled
            >
              Deposit
            </button>
            <br />
            <br />
            <button className="transition-all duration-200 w-36 border border-slate-200 py-2 opacity-40 text-black font-semibold rounded-xl cursor-not-allowed hover:bg-[#209476] hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:text-white">
              Withdraw
            </button>
          </div>
        </div>
        <div className="bg-white w-1/2 ml-3 p-8 py-9 rounded-xl flex justify-between dark:bg-slate-800">
          <div>
            <p className="text-slate-600 font-light text-xl mb-5 dark:text-white">
              Rewards balance
            </p>
            <p className="text-black font-semibold text-4xl dark:text-white">
              AED 0
            </p>
          </div>
          <div className="dark:text-white">
            <i className="fa fa-regular fa-star fa-4x my-auto mx-auto" />
          </div>
        </div>
      </div>
      <p className="text-xl mt-8 font-semibold dark:text-white">Transactions</p>
      <div className="bg-white w-full mt-4 px-12 rounded-xl dark:bg-slate-800">
        <div className="flex py-4">
          <span className="mr-20 dark:text-white">Type</span>
          <span className="mx-20 dark:text-white">Status</span>
          <span className="mx-20 dark:text-white">Date</span>
          <span className="mx-20 dark:text-white">Wallet</span>
          <span className="mx-20 dark:text-white">Amount</span>
        </div>
        <hr />
        <div className="py-12 text-center mx-auto my-auto font-display dark:text-white">
          <i class="fa-regular fa-2x fa-clock"></i>
          <br />
          <br />
          No transactions yet
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <div className="w-1/2 rounded-xl mr-4">
          <p className="text-xl mt-8 font-semibold mb-3 dark:text-white">
            Cards
          </p>
          <div className="rounded-xl bg-white p-8 dark:bg-slate-800">
            <div className="flex mb-4">
              <div className="bg-slate-100 w-fit rounded p-2 my-auto">
                <i className="fa fa-solid fa-credit-card fa-xl m-auto" />
              </div>
              <span className="ml-2 text-sm text-slate-700 my-auto tracking-wide dark:text-white">
                Add a card to enjoy instant deposits from anywhere in the world
              </span>
            </div>
            <button className="transition-all duration-200 w-full border border-[#D3D9E5] p-2 opacity-50 rounded-xl font-semibold cursor-not-allowed hover:bg-[#209476] hover:bg-[#209476] hover:text-white dark:hover:bg-blue-500 dark:text-white dark:hover:border-blue-500">
              <i className="fa-solid fa-plus mr-3" /> Add new card
            </button>
          </div>
        </div>
        <div className="w-1/2 rounded-xl ml-4">
          <p className="text-xl mt-8 font-semibold mb-3 dark:text-white">
            Banks
          </p>
          <div className="rounded-xl bg-white p-8 dark:bg-slate-800">
            <div className="flex mb-4">
              <div className="bg-slate-100 w-fit rounded p-2 my-auto">
                <i className="fa fa-solid fa-building-columns fa-xl m-auto" />
              </div>
              <span className="ml-2 text-sm text-slate-700 my-auto tracking-wide dark:text-white">
                Add a bank account to deposit from anywhere in the world
              </span>
            </div>
            <button className="transition-all duration-200 w-full border border-[#D3D9E5] p-2 opacity-50 rounded-xl font-semibold cursor-not-allowed hover:bg-[#209476] hover:text-white dark:hover:bg-blue-500 dark:hover:bg-blue-500 dark:text-white dark:hover:border-blue-500">
              <i className="fa-solid fa-plus mr-3" /> Add new bank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
