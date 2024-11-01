import React, { useEffect, useState } from "react";
import logoFooter from "../../assets/logo-footer.png";
export default function Footer() {
  // Save email local storage function
  const [inputEmail, setInputEmail] = useState("");
  useEffect(() => {
    const savedEmail = localStorage.getItem("UserEmail");
    if (savedEmail) {
      setInputEmail(savedEmail);
    }
  }, []);

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleSaveEmail = () => {
    localStorage.setItem("UserEmail", inputEmail);
  };

  return (
    <div className="bg-[#06091a] h-[42rem] md:[40rem] lg:h-[40rem]">
      <div className="w-[90%] 2xl:max-w-[1440px] mx-auto">
        <div className="h-[13rem] lg:h-[18rem] w-[95%] md:w-[80%] mx-auto flex -translate-y-[6.5rem]  lg:-translate-y-[9rem] justify-center items-center border solid border-gray-400 bg-white bg-opacity-15 rounded-2xl">
          <div className="m-4 w-full h-[80%] lg:h-[90%]  bg-gradient-to-bl from-[#c7effb] via-white to-[#fdeab9] rounded-2xl flex justify-center items-center">
            <div className="space-y-2 lg:space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-center font-bold">
                Subscribe to our Newsletter
              </h1>
              <p className="text-center  text-gray-500">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex gap-2 md:gap-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  onChange={handleEmailChange}
                  class="input input-bordered w-[9rem] sm:w-[12rem] md:w-[18rem] lg:w-[24rem]"
                />
                <button
                  onClick={handleSaveEmail}
                  className=" bg-gradient-to-r from-[#f669b0] via-[#fac13e] to-[#f7cb61] py-3 px-4 rounded-lg font-semibold text-xs md:text-base"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-[4rem]  lg:-translate-y-[7rem] space-y-4">
          <img
            className="mx-auto h-12 lg:h-24 lg:mb-12"
            src={logoFooter}
            alt=""
          />
          <div className="md:grid gap-4 md:gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:mb-12">
            <div className=" text-white">
              <h1>About</h1>
              <p className="text-sm text-gray-500">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className=" text-white">
              <h1>Quick link</h1>
              <ul className="text-sm text-gray-500 list-disc">
                <li className="ml-8">Home</li>
                <li className="ml-8">Service</li>
                <li className="ml-8">About</li>
                <li className="ml-8">Contact</li>
              </ul>
            </div>
            <div>
              <h1 className=" text-white">Subscribe</h1>
              <p className="text-sm text-gray-500 my-2">
                Subscribe our newsletter for the latest update.
              </p>
              <div className="bg-white flex rounded-lg w-[95%] max-w-[18rem] max-lg:w-[22rem]">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  class="input  w-[70%] text-black"
                  onChange={handleEmailChange}
                />
                <button
                  onClick={handleSaveEmail}
                  className=" bg-gradient-to-r from-[#f669b0] via-[#fac13e] to-[#f7cb61] py-3 px-4 rounded-lg font-semibold"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div class="text-gray-500 mx-auto text-center ">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
