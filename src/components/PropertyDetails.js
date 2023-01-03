import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SimpleImageSlider from 'react-simple-image-slider';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    label: 'January 13th, 2023',
    headline: 'Expected closing date',
    description: `This is a conservative estimate for the closing date of the property funding`,
  },
  {
    label: 'February 3rd, 2023',
    headline: 'SPV created and title deeds distributed',
    description:
      'The SPV will be created and all investors will receive their title deeds within 2-3 weeks of the funding closing, to prove their ownership of the property',
  },
  {
    label: 'February 10th, 2023',
    headline: 'DTCM application approved',
    description:
      'Our application to the Department of Tourism and Commerce Marketing for a short-term rental license requires 10 days for approval',
  },
  {
    label: 'February 10th, 2023',
    headline: 'Handover to property manager',
    description:
      'This unit will be handed over to the property manager for listing by February 10th, 2023',
  },
  {
    label: 'March 30th, 2023',
    headline: 'Expected first rental payment',
    description:
      'The first rental payment for this property is projected to be paid to investors by March 30th, 2023',
  },
];
const images = [
  'https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png',
  'https://pic.le-cdn.com/thumbs/520x390/480/1/properties/Property-1f2d0b2f2b8d637e89977f8f757d6ce2-75489865.jpg',
  'https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=',
  'https://www.manglamradiance.com/blog/wp-content/uploads/2020/09/slider10.jpg',
];
const PropertyDetails = () => {
  const navigate = useNavigate();
  const [propertyPrice, setPropertyPrice] = useState(2000);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleRedirectToPropertyDetailsPage = () => {
    navigate(APPLICATION_URLS.PROPERTY_DETAILS);
  };

  return (
    <div className="transition-all duration-500 py-4 px-6 bg-[#F7FAFC] dark:bg-black min-h-screen w-full md:p-8 mb-16 md:mb-0">
      <div className="flex justify-between">
        <Link
          className="text-[#41CE8E] my-auto font-display text-md font-semibold hover:text-[#209476] hover:underline dark:text-white"
          to={APPLICATION_URLS.PROPERTIES}
        >
          <i class="fa-solid fa-chevron-left"></i> Back to listings
        </Link>
        <button className="border py-1 md:py-2 bg-white rounded-xl border-[2px] border-black px-4 md:px-6 text-center my-auto hover:bg-black hover:text-white dark:border-white">
          <i class="fa-solid fa-heart mx-auto mr-2 hover:text-red-500"></i>
          Favorite
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="md:w-1/2 rounded">
          <img
            src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/70/images/1240/2400px_main_I9ZtFUvqlqpCKMqQxv9sehlABWw5wZwMUCzxX9Ap.jpeg"
            alt="property"
            className="rounded-xl w-full max-h-72"
          />
        </div>
        <div className="md:w-1/2 flex md:flex-col w-full">
          <div className="flex flex-col md:flex-row w-1/2 my-auto mx-3">
            <img
              src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/70/images/1242/1280px_main_iqFYzzZpX8rL1QKCX1PlyiOldPgUifAWeXriiIU4.jpeg"
              className="rounded-xl w-full max-h-32 mt-2 md:mt-0"
              alt="property"
            />
            <img
              src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/70/images/1243/2400px_main_mI7xTcJvw8LwkhpMC5cqjvYl1KQdCvtevxJBt9ko.jpeg"
              className="rounded-xl w-full max-h-32 md:ml-2 mt-2 md:mt-0"
              alt="property"
            />
          </div>
          <div className="flex flex-col md:flex-row w-1/2 my-auto mx-3">
            <img
              src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/70/images/1242/1280px_main_iqFYzzZpX8rL1QKCX1PlyiOldPgUifAWeXriiIU4.jpeg"
              className="rounded-xl w-full max-h-32 mt-2 md:mt-0"
              alt="property"
            />
            <img
              src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/70/images/1242/1280px_main_iqFYzzZpX8rL1QKCX1PlyiOldPgUifAWeXriiIU4.jpeg"
              className="rounded-xl w-full max-h-32 md:ml-2 mt-2 md:mt-0"
              alt="property"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <p className="font-bold text-2xl md:text-4xl dark:text-white">
            1 Bed in Index Tower DIFC
          </p>
          <p className="text-slate-500 mt-2 tracking-wide text-xs md:text-sm dark:text-white">
            1 Bedroom | 2 Bathroom | 1,133 sq.ft | DIFC
          </p>
          <hr className="mt-5 md:mr-4" />
          <div className="flex">
            <img
              src="https://getstake.com/assets/flags/ae.png"
              className="rounded-full h-8 w-8 my-auto"
              alt="flag"
            />
            <div className="p-4">
              <p className="text-black font-semibold md:text-lg dark:text-white">
                Dubai, United Arab Emirates
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                A mature real estate market with a high return on investment
              </p>
            </div>
          </div>
          <div className="flex dark:text-white">
            <i class="fa-solid fa-tree rounded-full h-8 w-8 my-auto fa-2x"></i>
            <div className="p-4">
              <p className="text-black font-semibold md:text-lg dark:text-white">
                Holiday Home
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                Professionally managed short term rental for business travelers
                and families
              </p>
            </div>
          </div>
          <div className="flex dark:text-white">
            <i class=" fa-brands fa-bitcoin rounded-full h-8 w-8 my-auto fa-2x"></i>
            <div className="p-4">
              <p className="text-black font-semibold md:text-lg dark:text-white">
                Average daily rate of AED 822
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                Monthly rental income will vary based on daily rate and
                occupancy levels
              </p>
            </div>
          </div>
          <div className="flex dark:text-white">
            <i class="fa-solid fa-calendar-days rounded-full h-8 w-8 my-auto fa-2x"></i>
            <div className="p-4">
              <p className="text-black font-semibold md:text-lg dark:text-white">
                80% average occupancy rates
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                Daily rates and occupancy levels will vary by season
              </p>
            </div>
          </div>
          <div className="flex dark:text-white">
            <i class="fa-solid fa-chart-line rounded-full h-8 w-8 my-auto fa-2x"></i>
            <div className="p-4">
              <p className="text-black font-semibold md:text-lg dark:text-white">
                12.94% projected annual gross yield
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                With an expected net yield of 6.55% and a price per square foot
                of AED 1,636
              </p>
            </div>
          </div>
        </div>
        <div className="border md:w-1/3 bg-white rounded-xl mt-5 md:mt-0 p-4 md:p-6 dark:bg-slate-800">
          <p className="text-slate-500 text-lg text-center dark:text-white">
            Property price
          </p>
          <p className="text-[#41CE8E] mt-2 font-bold text-center dark:text-blue-500">
            AED <span className="text-4xl">1,853,219</span>
          </p>
          <div className="mt-5 flex justify-between">
            <div className="min-h-[8px] w-4/5 rounded-l bg-[#41CE8E] dark:bg-blue-500"></div>
            <div className="min-h-[8px] w-1/5 rounded-r bg-slate-200"></div>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-base text-slate-500">80% funded</p>
            <p className="text-base text-slate-500">AED 256,521 available</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-base text-slate-500">
              <span className="text-[#41CE8E] font-semibold dark:text-blue-500">
                252{' '}
              </span>
              investors
            </p>
            <p className="text-base text-red-500">
              <i class="fa-regular fa-clock mx-2"></i>40 days left
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 mt-4 dark:bg-slate-800">
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Project return
              </span>
              <span className="text-black font-semibold dark:text-white">
                53.44 %
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Project gross yield
              </span>
              <span className="text-black font-semibold dark:text-white">
                12.94%
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Porject net yield
              </span>
              <span className="text-black font-semibold dark:text-white">
                6.55%
              </span>
            </p>
            <br />
            <p className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-600">
                Average occupancy rate
              </span>
              <span className="text-black font-semibold dark:text-white">
                80%
              </span>
            </p>
          </div>
          <div className="mt-5 flex justify-between">
            <input
              className="w-1/2 border rounded-xl px-6 py-3 flex"
              type="number"
              defaultValue={2000}
              value={propertyPrice}
              onChange={(e) => {
                setPropertyPrice(Number(e.target.value));
              }}
            />
            <button className="border rounded-xl bg-[#41CE8E] hover:bg-[#209476] text-white px-6 py-3 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-800 dark:hover:border-blue-800">
              Add to cart
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="text-xs rounded-xl mx-2  bg-[#E9FBF5] hover:bg-[#209476] text-black px-4 py-1 hover:text-white dark:hover:bg-blue-800 dark:bg-blue-500 dark:text-white"
              onClick={() => {
                setPropertyPrice(propertyPrice + 2000);
              }}
            >
              + AED 2000
            </button>
            <button
              className="text-xs rounded-xl mx-2 bg-[#E9FBF5] hover:bg-[#209476] text-black px-4 py-1 hover:text-white dark:hover:bg-blue-800 dark:bg-blue-500 dark:text-white"
              onClick={() => {
                setPropertyPrice(propertyPrice + 5000);
              }}
            >
              + AED 5000
            </button>
            <button
              className="text-xs rounded-xl mx-2 bg-[#E9FBF5] hover:bg-[#209476] text-black px-4 py-1 hover:text-white dark:hover:bg-blue-800 dark:bg-blue-500 dark:text-white"
              onClick={() => {
                setPropertyPrice(propertyPrice + 10000);
              }}
            >
              + AED 10000
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-2xl dark:text-white">Funding timeline</p>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 4 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  <p className="dark:text-white">{step.label}</p>
                </StepLabel>
                <StepContent>
                  <div>
                    <p className="font-bold dark:text-white">{step.headline}</p>
                    <p className="text-sm dark:text-white">
                      {step.description}
                    </p>
                  </div>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      <div>
        <p className="font-bold mt-5 text-2xl dark:text-white">
          Similar Properties
        </p>
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
        </div>
      </div>
    </div>
  );
};
export default PropertyDetails;
