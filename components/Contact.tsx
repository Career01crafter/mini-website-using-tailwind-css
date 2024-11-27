import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="p-6 sm:p-12 mt-0 h-auto sm:h-screen bg-sky-500">
      <h1 className="text-blue-800 text-center font-bold text-5xl sm:text-5xl pt-2">
        Contact Us
      </h1>

      <div className="flex flex-col pt-6 mt-10 sm:flex-row justify-center items-center bg-gradient-to-tl from-sky-600 via-gray-300 to-sky-600 border-opacity-20 border-blue-800 shadow-lg shadow-blue-500 sm:m-20 sm:p-10 space-y-8 sm:space-y-0">
        
        <div className="flex flex-col justify-start items-start sm:w-1/2 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl text-black underline pb-2">
              Phone Number:
            </h3>
            <a
              href="tel:+0211234567"
              className="text-blue-800 text-lg sm:text-2xl transition duration-300"
            >
              (021) 123-4567
            </a>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl text-black underline pb-2">
              Email Us:
            </h3>
            <a
              href="mailto:Driveaura@yourwebsite.com"
              className="text-blue-800 text-lg sm:text-2xl transition duration-300"
            >
              DriveAura@yourwebsite.com
            </a>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl text-black underline pb-2">
              Visit Our Website:
            </h3>
            <a
              href="https://www.Driveaura.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 text-lg sm:text-2xl transition duration-300"
            >
              www.DriveAura.com
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center sm:w-1/2 mt-6 sm:mt-0">
          <Image
            src="/contact.png"
            alt="Contact illustration"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}