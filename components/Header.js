import Image from 'next/image';
import profilePic from '../Assets/Frame.png';

const Header = () => {
  return (
    <>
      <div className='h-96 w-full bg-[url("../Assets/FondoCOL.png")] bg-cover bg-center bg-no-repeat '>
        <div>
          <Image
            className="relative top-[50%] left-[50%] -translate-x-2/4 p-2"
            src={profilePic}
            alt="Para Cuando text"
          />
        </div>

        <div className="relative p-3 max-w-none grid justify-center">
          <label className="relative">
            <input
              className="w-[350px] bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-full py-2 pl-4 pr-10 focus:outline-none"
              placeholder="
                What do you want to see in your city?"
              type="text"
            />

            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 fill-black"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
          </label>
        </div>

        <div className="p-3 max-w-none flex justify-center">
          <button
            type="button"
            className="text-slate-400 py-1 px-1 mr-2  text-sm font-normal bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            Brands and Stores
          </button>

          <button
            type="button"
            className="text-slate-400 py-1 px-1 mr-2  text-sm font-normal bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Artists and concerts
          </button>

          <button
            type="button"
            className="text-slate-400 py-1 px-1 mr-2  text-sm font-normal bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Tourney
          </button>
        </div>

        <div className="p-3">
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-7 py-2.5 text-center mr-2 mb-2  "
          >
            Next
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-7 py-2.5 text-center mr-2 mb-2  "
          >
            See more
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-6 py-2.5 text-center mr-2 mb-2  "
          >
            To post
          </button>
        </div>

        <div className="p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="bg-2 w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
