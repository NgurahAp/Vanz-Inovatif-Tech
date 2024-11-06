import { AiOutlineSlack } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsChatHeart } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export const ContactUs = () => {
  return (
    <section className="h-screen  p-20 flex flex-col items-center justify-center">
      <AiOutlineSlack className="text-black text-4xl" />
      <h1 className="text-5xl pt-14 pb-5 font-bold">
        Contact our friendly team
      </h1>
      <p className="text-xl">Let us know how we can help</p>
      <div className="flex flex-wrap gap-6 w-full justify-center py-10">
        <div className="flex flex-col items-start p-4 border rounded-lg shadow-md w-[23%]">
          <IoChatbubblesOutline className="text-2xl mb-20" />
          <div className="mb-2">
            <span className="text-lg font-semibold">Chat to sales</span>
          </div>
          <p className="text-gray-600 mb-4">Speak to our friendly team.</p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-blue-500 font-semibold"
          >
            sales@untitledui.com
          </a>
        </div>
        <div className="flex flex-col items-start p-4 border rounded-lg shadow-md w-[23%]">
          <BsChatHeart className="text-2xl mb-20" />
          <div className="mb-2">
            <span className="text-lg font-semibold">Chat to support</span>
          </div>
          <p className="text-gray-600 mb-4">Were here to help.</p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-blue-500 font-semibold"
          >
            support@untitledui.com
          </a>
        </div>
        <div className="flex flex-col items-start p-4 border rounded-lg shadow-md w-[23%]">
          <CiLocationOn className="text-2xl mb-20" />
          <div className="mb-2">
            <span className="text-lg font-semibold">Visit us</span>
          </div>
          <p className="text-gray-600 mb-4">Visit our office HQ.</p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-blue-500 font-semibold"
          >
            View on google maps
          </a>
        </div>
        <div className="flex flex-col items-start p-4 border rounded-lg shadow-md w-[23%]">
          <IoCallOutline className="text-2xl mb-20" />
          <div className="mb-2">
            <span className="text-lg font-semibold">Call us</span>
          </div>
          <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-blue-500 font-semibold"
          >
            +62 9218798241
          </a>
        </div>
      </div>
    </section>
  );
};
