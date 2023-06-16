import { about_xoxo } from "../assets/AllImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div>
      <main className="mt-12 px-5 max-w-7xl mx-auto" data-aos="fade">
        <h2 className="font-gilroyMedium text-3xl text-center">About Us</h2>
        <p
          className="font-gilroyRegular  md:text-xl mt-9 text-center"
          data-aos="fade"
        >
        </p>
        <div className="mt-20 flex flex-col lg:flex-row bg-[#f289ff] bg-opacity-10 w-full rounded px-9 py-2 gap-10 items-center">
          <img
            src={about_xoxo}
            alt="about us"
            className="w-full  max-w-[500px]"
            data-aos="zoom-in"
          />
          <div>
            <h5 className="text-3xl font-gilroyMedium mb-6">
              OUR DOCTORS <br /> <h2>M E D C A R T</h2>
            </h5>
            <p><b>Medkart Pharmacy helps people who buy medicines regularly by providing them access to genuine generic medicines at discounted prices.</b></p>
            <p className="font-gilroyRegular lg:text-left">
            Medcart brings to you India's first super specialty and critical care online platform, which can be accessed for all your health needs. They are trying to make healthcare a hassle-free experience for you. Get your critical care, super specialty and life saving drugs at the comfort of your home. They provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely with making sure to get it delivered at home in 1000+ cities across India from licensed and verified pharmacies.
              <br />
              <br />
              Medcart is India’s leading digital consumer healthcare platform. <br />
            </p>
          </div>
        </div>
        {/* Our Mission */}
        <div
          className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center"
          data-aos="fade-right"
        >
          <div className="wrapper max-w-[400px]">
            <p className="font-gilroyRegular">
              <span className="font-gilroyBold">Our Mission</span> We at Medkart dream of making sure that everyone is truly aware of Generic medicines in India and can exercise their choice of company. The way we do it for any other product be it clothes or food.
            </p>
          </div>
          <div className="wrapper max-w-[400px]" data-aos="fade-left">
            <p className="font-gilroyRegular">
              <span className="font-gilroyBold">Our Vision</span>  The manner in which the citizens of developed countries can choose the company of medicines all by themselves. Giving the patients the power of information to take wise decisions for themselves and not let anyone else dictate it. A dream dedicated to the health of India.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
