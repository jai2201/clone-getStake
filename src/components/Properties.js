import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SimpleImageSlider from 'react-simple-image-slider';
import { useNavigate } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';

const Properties = () => {
  const navigate = useNavigate();
  const handleRedirectToPropertyDetailsPage = () => {
    navigate(APPLICATION_URLS.PROPERTY_DETAILS);
  };
  const images = [
    'https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png',
    'https://pic.le-cdn.com/thumbs/520x390/480/1/properties/Property-1f2d0b2f2b8d637e89977f8f757d6ce2-75489865.jpg',
    'https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=',
    'https://www.manglamradiance.com/blog/wp-content/uploads/2020/09/slider10.jpg',
  ];
  return (
    <div className="transition-all duration-500 py-4 px-6 bg-[#F7FAFC] dark:bg-black min-h-screen w-full md:p-8 mb-16 md:mb-0">
      <p className="font-semibold text-2xl text-center md:text-left md:text-3xl dark:text-white">
        Properties
      </p>
      <Tabs className="mt-5 md:mt-10 mx-0">
        <TabList className="bg-white rounded-3xl md:px-2 py-2 flex my-auto flex justify-between md:w-2/5 overflow-hidden">
          <Tab
            selectedClassName="transition-all duration-200 border-0 ml-2 md:ml-0 rounded-3xl px-2 py-1 text-white text-sm md:text-base my-auto bg-[#41CE8E] hover:cursor-pointer hover:bg-[#209476] outline-0 dark:bg-blue-500 dark:hover:bg-blue-400"
            className="transition-all duration-200 border-0 rounded-3xl ml-2 md:ml-0 px-2 py-1 text-black text-sm md:text-base my-auto hover:cursor-pointer hover:bg-[#209476] hover:text-white outline-0 dark:hover:bg-blue-400"
          >
            Available
          </Tab>
          <Tab
            selectedClassName="transition-all duration-200 border-0 rounded-3xl px-2 py-1 text-white text-sm md:text-base my-auto bg-[#41CE8E] hover:cursor-pointer hover:bg-[#209476] outline-0 dark:bg-blue-500 dark:hover:bg-blue-400"
            className="transition-all duration-200 border-0 rounded-3xl px-2 py-1 text-black text-sm md:text-base my-auto hover:cursor-pointer hover:bg-[#209476] hover:text-white outline-0 dark:hover:bg-blue-400"
          >
            Funded
          </Tab>
          <Tab
            selectedClassName="transition-all duration-200 border-0 rounded-3xl mr-2 md:ml-0 px-2 py-1 text-white text-sm md:text-base my-auto bg-[#41CE8E] hover:cursor-pointer hover:bg-[#209476] outline-0 dark:bg-blue-500 dark:hover:bg-blue-400"
            className="transition-all duration-200 border-0 rounded-3xl mr-2 md:ml-0 px-2 py-1 text-black text-sm md:text-base my-auto hover:cursor-pointer hover:bg-[#209476] hover:text-white outline-0 dark:hover:bg-blue-400"
          >
            Exited
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6 md:flex md:flex-row">
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-6 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Holiday Home
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-5 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Holiday Home
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-5 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Holiday Home
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6 md:flex md:flex-row">
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-6 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Rented
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6 md:flex md:flex-row">
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-6 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <div className="bg-[#41CE8E] text-white text-center p-1 text-base font-semibold">
                Sold
              </div>
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Sold
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handleRedirectToPropertyDetailsPage}
              className="transition-all duration-200 bg-white mx-auto md:mx-0 w-[95%] md:w-[370px] min-h-fit rounded-xl overflow-hidden mt-6 md:mt-12 hover:-translate-y-2 cursor-pointer dark:bg-slate-800"
            >
              <div className="bg-[#41CE8E] text-white text-center p-1 text-base font-semibold">
                Sold
              </div>
              <SimpleImageSlider
                style={{
                  margin: '0 auto',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2}
                navStyle={1}
                navSize={15}
                navMargin={10}
                slideDuration={0.2}
                width={'100%'}
                height={232}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div className="p-4 mb-5">
                <div className="flex">
                  <div className="border flex px-2 rounded text-sm dark:text-white">
                    <img
                      alt="flag"
                      className="rounded-xl h-3 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&usqp=CAU"
                    />
                    Dubai
                  </div>
                  <div className="border flex px-2 rounded text-sm ml-3 dark:text-white">
                    <img
                      alt="tree"
                      className="rounded-xl h-4 w-3 mr-1 my-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-QFbVCBm4tKNi8vIzO8RsHNuvMjxU_uDnA&usqp=CAU"
                    />
                    Sold
                  </div>
                </div>
                <p className="text-black font-display text-lg font-semibold my-2 dark:text-white">
                  1 Bed in Index Tower DIFC
                </p>
                <div className="flex justify-between my-auto">
                  <p className="font-bold font-display text-[#41CE8E] text-xl dark:text-white">
                    <span className="text-base font-medium mr-1">AED</span>
                    1,953,219
                  </p>
                  <span className="text-xs my-auto text-slate-500 dark:text-white">
                    75% funded
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="min-h-[8px] w-3/4 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
                  <div className="min-h-[8px] w-1/4 rounded-r bg-slate-200"></div>
                </div>
                <div className="bg-slate-100 mt-5 rounded px-4 py-2">
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised return
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      10.69%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Annualised appreciation
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto ">
                      Projected gross yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold ">
                      12.94%
                    </span>
                  </p>
                  <p className="flex justify-between my-1">
                    <span className="text-slate-500 text-sm my-auto">
                      Projected net yield
                    </span>
                    <span className="text-black text-sm my-auto font-semibold">
                      6.55%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Properties;
