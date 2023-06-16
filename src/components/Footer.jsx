import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer className="relative bg-[#f289ff] bg-opacity-10 mt-20 w-full pt-8 pb-6 font-gilroyRegular">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className=" text-2xl md:text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 flex gap-4 text-3xl lg:mb-0 mb-6">
              <AiFillFacebook className="ext-blue-700" />
              <AiFillInstagram className="" />
              <AiFillTwitterSquare className="" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 font-gilroyBold">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="C:\Users\VISHAL\Desktop\Med_Cart\ERR_404_BitKraft\main\src\assets\LADYDOCTOR.png"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 font-gilroyBold">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Made by
              </a>
              <a
                href="#"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                {" "}
                MED_CART❤️
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
