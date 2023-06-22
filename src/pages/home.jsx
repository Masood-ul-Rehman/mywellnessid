import React, { useRef, useEffect, useState } from "react";
import heroImg from "../assets/images/hero-img.png";
import im2 from "../assets/images/im2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scroll from "../components/SmoothScrool";

const HomePage = () => {
  const divRef = useRef(null);

  const [borderRadius, setBorderRadius] = useState(0);
  const handleScroll = () => {
    if (divRef.current) {
      const { top } = divRef.current.getBoundingClientRect();
      const currentPosition = Math.abs(top);

      // Calculate the desired borderRadius based on the current position
      const maxPosition = window.innerHeight;
      const newBorderRadius = (currentPosition / maxPosition) * 150;

      // Update the state value
      setBorderRadius(newBorderRadius > 150 ? 150 : newBorderRadius);
    }
  };

  console.log(borderRadius);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-background">
      <div className="bg-background2 relative z-10 div1">
        <div className="pt-10  ">
          <Header />
        </div>
        <div className="xl:mx-36 lg:mx-24 md:mx-20 sm:mx-20 mx-10 ">
          <hero className="lg:flex block justify-between flex-wrap xl:mt-36 mt-24 items-center">
            <div className="xxl:pr-28 lg:pr-20 lg:w-[50%]">
              <h1 className="xxl:text-[3rem] xxl:leading-[2.8rem] laptop:text-4xl lg:text-3xl md:text-4xl text-3xl">
                Monitor Your Health in Real-Time With AI Recommendations
              </h1>
              <h4 className="mt-6">
                Stay on top of your health with My Wellness ID – a mobile app
                that syncs with your wearable device and a webapp that allows
                patients and doctors to access your real-time health monitoring.
              </h4>
              <button className="gradient px-6 py-5 rounded-xl mt-6">
                Connect Wallet
              </button>
            </div>
            <img
              src={heroImg}
              alt="hero imag"
              className="lg:w-3/6 lg:mt-0 mt-10"
            />
          </hero>
        </div>
      </div>
      <div
        className="bg-background div2 lg:block hidden"
        ref={divRef}
        style={{
          borderTopLeftRadius: `${borderRadius}px`,
          borderTopRightRadius: `${borderRadius}px`,
        }}
      >
        <div className="xl:mx-36 lg:mx-24 md:mx-20 sm:mx-20 mx-10">
          <section className="flex justify-center lg:items-center md:text-center xl:mt-52 lg:mt-40 mt-20 flex-col">
            <h1 className="xxl:text-10xl lg:text-5xl md:text-5xl text-4xl">
              Blockchain Health Wallets
            </h1>
            <div className="lg:w-4/5">
              <h4 className="mt-6">
                My Wellness ID combines patients’ existing medical records with
                real-time health monitoring to produce AI powered Predictive
                Analysis for the Patient and Doctor. Battling a Chronic Disease
                is the one of the most difficult things the Human Body can
                experience, our goal is to move healthcare forward by finding a
                cure for each disease.
                <br />
                My Wellness ID Wallet runs on the Polygon Blockchain, and
                transactions are powered by its currency MATIC.AI health
                recommendations will be delivered in users wallets as NFT's
                (Non-fungible Tokens) that have been minted to the Blockchain
                and can easily be shared with your healthcare provider.
              </h4>
              <button className="gradient px-6 py-5 rounded-xl mt-6">
                Connect Wallet
              </button>
            </div>
            <img src={im2} alt="Our process" className="mt-20 w-full" />
          </section>
          <section className="lg:flex justify-between lg:items-center xl:mt-52 lg:mt-40 mt-20">
            <h1 className="xxl:text-10xl xl:text-5xl laptop:text-3xl text-3xl lg:w-[48%]">
              A DAO Research Platform for AutoImmune Disease
            </h1>
            <h4 className="lg:w-[48%] lg:mt-0 mt-6">
              My Wellness ID is a research platform built by Autoimmune Disease
              patients for Autoimmune Disease patients. We believe that the
              patient owns their health data, and this data should be used for
              advanced research purposes. A DAO (Decentralized Autonomous
              Organization) structure will allow patient members to vote and
              determine the types of research projects to pursue. Patients will
              receive funding for any project participation.
            </h4>
          </section>
        </div>
        <div className="laptop:pt-10">
          <Footer />
        </div>
      </div>
      <div className="bg-background  lg:hidden ">
        <div className="xl:mx-36 lg:mx-24 md:mx-20 sm:mx-20 mx-10">
          <section className="flex justify-center lg:items-center md:text-center xl:mt-52 lg:mt-40 mt-20 flex-col">
            <h1 className="xxl:text-10xl lg:text-5xl md:text-5xl text-4xl">
              Blockchain Health Wallets
            </h1>
            <div className="lg:w-4/5">
              <h4 className="mt-6">
                My Wellness ID combines patients’ existing medical records with
                real-time health monitoring to produce AI powered Predictive
                Analysis for the Patient and Doctor. Battling a Chronic Disease
                is the one of the most difficult things the Human Body can
                experience, our goal is to move healthcare forward by finding a
                cure for each disease.
                <br />
                My Wellness ID Wallet runs on the Polygon Blockchain, and
                transactions are powered by its currency MATIC.AI health
                recommendations will be delivered in users wallets as NFT's
                (Non-fungible Tokens) that have been minted to the Blockchain
                and can easily be shared with your healthcare provider.
              </h4>
              <button className="gradient px-6 py-5 rounded-xl mt-6">
                Connect Wallet
              </button>
            </div>
            <img src={im2} alt="Our process" className="mt-20 w-full" />
          </section>
          <section className="lg:flex justify-between lg:items-center xl:mt-52 lg:mt-40 mt-20">
            <h1 className="xxl:text-10xl xl:text-5xl laptop:text-3xl text-3xl lg:w-[48%]">
              A DAO Research Platform for AutoImmune Disease
            </h1>
            <h4 className="lg:w-[48%] lg:mt-0 mt-6">
              My Wellness ID is a research platform built by Autoimmune Disease
              patients for Autoimmune Disease patients. We believe that the
              patient owns their health data, and this data should be used for
              advanced research purposes. A DAO (Decentralized Autonomous
              Organization) structure will allow patient members to vote and
              determine the types of research projects to pursue. Patients will
              receive funding for any project participation.
            </h4>
          </section>
        </div>
        <div className="laptop:pt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
