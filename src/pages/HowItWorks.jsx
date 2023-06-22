import React from "react";
import wallet from "../assets/images/wallet.gif";
import download from "../assets/images/download.gif";
import sync from "../assets/images/sync.gif";
import community from "../assets/images/community.gif";
import health from "../assets/images/health.gif";
import decen from "../assets/images/decen.gif";

function HowItWorks() {
  return (
    <>
      <section className="flex justify-center lg:items-center md:text-center sm:text-start text-center flex-col xl:mt-52 lg:mt-40 mt-20 xl:mx-36 lg:mx-24 md:mx-20 sm:mx-20 mx-10">
        <h1 className="xxl:text-10xl lg:text-5xl md:text-5xl text-4xl">
          How it works
        </h1>
        <div className="flex flex-wrap justify-between mt-16">
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-[49%] lg:w-[32%] py-8 px-4">
            <img src={wallet} className="w-[50px]" alt="wallet" />
            <h1 className="mt-4 text-2xl">Step 1</h1>
            <h1 className="mt-2 text-2xl">Create Blockchain Wallet</h1>
            <h4 className="mt-2 text-desc">
              Create a new Account at
              <br />
              <a href="http://mywellnessid.com/">mywellnessid.com</a>
            </h4>
          </div>
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-[49%] lg:w-[32%] py-8 px-4 mt-6 md:mt-0 md:ml-3 lg:ml-0">
            <img src={download} className="w-[50px]" alt="download" />
            <h1 className="mt-4 text-2xl">Step 2</h1>
            <h1 className="mt-2 text-2xl">Download App</h1>
            <h4 className="mt-2 text-desc">
              Download MYWELLNESSID from App Stores.
            </h4>
          </div>
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-full lg:w-[32%] py-8 px-4 mt-6 lg:mt-0">
            <img src={sync} className="w-[60px]" alt="sync" />
            <h1 className="mt-4 text-2xl">Step 3</h1>
            <h1 className="mt-2 text-2xl">Sync Wearable</h1>
            <h4 className="mt-2 text=desc">
              Sync your compliant Wearable with MYWELLNESS ID App.
            </h4>
          </div>
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-[49%] lg:w-[32%] py-8 px-4 mt-6">
            <img src={community} className="w-[50px]" alt="community" />
            <h1 className="mt-4 text-2xl">Step 4</h1>
            <h1 className="mt-2 text-2xl">Join our DAO</h1>
            <h4 className="mt-2 text=desc">
              Register for DAO participation so you have a voice within the
              platform
            </h4>
          </div>
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-[49%] lg:w-[32%] py-8 px-4 mt-6 md:mt-6 md:ml-3 lg:ml-0">
            <img src={health} className="w-[50px]" alt="health" />
            <h1 className="mt-4 text-2xl">Step 5</h1>
            <h1 className="mt-4 text-2xl">Own Your Health</h1>
            <h4 className="mt-2 text=desc">
              Do your part by staying up to date with app interaction for health
              monitoring.
            </h4>
          </div>
          <div className="text-center flex items-center flex-col border-2 border-desc rounded-2xl w-full md:w-full lg:w-[32%] py-8 px-4 mt-6">
            <img src={decen} className="w-[50px]" alt="decentralized" />
            <h1 className="mt-2 text-2xl">Step 6</h1>
            <h1 className="mt-4 text-2xl">Decentralized Community</h1>
            <h4 className="mt-2 text=desc">
              Help determine platform direction through a structured voting
              process
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
