import Image from 'next/image';
import Paracuando from '../Assets/LoginImgs/Paracuandologin.png';
import TextSignup from '../Assets/LoginImgs/textlogin.png';
import TextSignupbg from '../Assets/LoginImgs/textloginbg.png';

const Login = () => {
  return (
    <>
      <div className="flex">
        <div className='hidden sm:bg-[url("../Assets/LoginImgs/bgLogin.png")] sm:flex justify-center items-center content-center bg-cover bg-transparent bg-no-repeat h-screen w-full'>
          <Image
            className="sm:w-3/2"
            src={TextSignup}
            alt="marcas, artistas y torneos"
          />
          <Image className="w-3/2" src={TextSignupbg} alt="queretaro" />
        </div>
        <div className="pt-9 w-full flex flex-col justify-center">
          <div className="w-full">
            <Image className="mx-auto" src={Paracuando} alt="Paracuandotext" />
          </div>
          <div className="px-5">
            <h1>
              <strong className="font-sans font-semibold leading-5">
                Login
              </strong>
            </h1>
            <p className="font-sans font-normal leading-5">
              Login with the data you entered during your registration
            </p>
            <form className="sm:flex flex-col gap-6 pt-6 w-[95%]">
              <div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="border-[1px] border-black pl-3 rounded h-9"
                    type="text"
                    id="email"
                    required="email"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    className="border-[1px] border-black pl-3 rounded h-9"
                    type="password"
                    id="password"
                    required="password"
                  />
                </div>
              </div>

              <button
                className="m-4 mx-auto rounded-sm h-9 bg-blue-700 w-full"
                type="submit"
              >
                Log in
              </button>
              <a className="flex justify-center sm:mx-auto" href="#">
                Did you forget your password?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
