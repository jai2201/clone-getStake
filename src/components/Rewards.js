import { React, useState } from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const Rewards = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const handleCopy = () => {
    setCopyButtonText('Copied !');
    navigator.clipboard.writeText('Copy this text to clipboard');
  };
  return (
    <div className="transition-all duration-500 py-4 px-6 bg-[#F7FAFC] dark:bg-black min-h-screen w-full md:p-8 mb-16 md:mb-0">
      <p className="font-semibold text-3xl dark:text-white">Rewards</p>
      <div className="w-full mt-10 rounded-xl bg-white p-4 dark:bg-slate-800">
        <p className="text-black text-center bg-white dark:text-white dark:bg-slate-800">
          <span className="font-semibold">Free property! </span>
          Invite your friends and you'll both receive a gift balance to invest
          in our properties!
        </p>
      </div>
      <div className="flex mt-8 justify-content flex-col md:flex-row">
        <div className="bg-white rounded-xl md:w-1/3 p-10 dark:bg-slate-800">
          <p className="mb-2 text-slate-600 dark:text-white">
            Total rewards earned
          </p>
          <p className="font-bold text-3xl dark:text-white">AED 12,000</p>
          <div className="flex my-auto justify-between mt-3 dark:text-white">
            <div>
              <i className="fa fa-user fa-4x my-4" />
              <br />9 Registered
            </div>
            <div>
              <i class="fa-solid fa-coins fa-4x my-4" />
              <br />
              30,000 Invested
            </div>
          </div>
        </div>
        <div className="md:px-20 w-full py-2 px-5">
          <p className="font-bold text-xl md:text-3xl mb-16 dark:text-white">
            How it works:
          </p>
          <ProgressBar percent={0} filledBackground="" height={5}>
            <Step transition="scale">
              {() => (
                <div className="text-xl bg-white p-2 h-10 w-10 md:p-5 md:h-20 md:w-20 rounded-full m-auto text-center dark:bg-slate-800 dark:text-white">
                  1
                </div>
              )}
            </Step>
            <Step transition="scale">
              {() => (
                <div className="text-xl bg-white p-2 h-10 w-10 md:p-5 md:h-20 md:w-20 rounded-full m-auto text-center dark:bg-slate-800 dark:text-white">
                  2
                </div>
              )}
            </Step>
            <Step transition="scale">
              {() => (
                <div>
                  <div className="text-xl bg-white p-2 h-10 w-10 md:p-5 md:h-20 md:w-20 rounded-full m-auto text-center dark:bg-slate-800 dark:text-white">
                    3
                  </div>
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-3xl mt-16 mb-8 dark:text-white">
          Here's AED 250 on us!
        </p>
        <div className="flex flex-col md:flex-row">
          <p className="font-semibold text-sm md:text-base my-auto dark:text-white">
            https://getstake.com/signup?ref=NAVEEN32
          </p>
          <button
            className="md:ml-16 md:w-40 mt-5 md:mt-0 font-family bg-green-400 hover:bg-green-500 text-white px-8 py-2 border rounded dark:bg-blue-500 dark:border-blue-500"
            onClick={handleCopy}
          >
            {copyButtonText}
          </button>
          <div className="md:ml-20 flex justify-between mt-10 dark:text-white">
            <i className="fa-brands fa-facebook fa-2x md:fa-3x mx-4"></i>
            <i class="fa-brands fa-twitter fa-2x md:fa-3x mx-4"></i>
            <i class="fa-brands fa-whatsapp fa-2x md:fa-3x mx-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
