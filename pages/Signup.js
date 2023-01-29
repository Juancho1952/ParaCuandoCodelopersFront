import Image from 'next/image';
import Paracuando from '../Assets/SingupImg/Paracuando.png';
import TextSignup from '../Assets/SingupImg/textsignup.png';
import TextSignupbg from '../Assets/SingupImg/textsignupbg.png';

const Signup = () => {
  return (
    <>
      <div className="flex">
        <div className='hidden sm:bg-[url("../Assets/SingupImg/bg-Signup.png")] sm:flex justify-center items-center content-center bg-cover bg-transparent bg-no-repeat h-screen w-full'>
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
              <strong>Sign up</strong>
            </h1>
            <p>Login with the data you entered during your registration</p>
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
                <div className="flex  gap-8 w-full">
                  <div className="w-3/6 flex flex-col sm:w-2/4">
                    <label htmlFor="name">Name</label>
                    <input
                      className="border-[1px] border-black pl-3 rounded h-9"
                      type="text"
                      id="name"
                      required="text"
                      placeholder="Erik"
                    />
                  </div>
                  <div className="w-3/6 max-w-[50%] sm:w-2/4 flex flex-col">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      className="border-[1px] border-black pl-3 rounded h-9"
                      type="text"
                      id="lastname"
                      required="text"
                      placeholder="Perez"
                    />
                  </div>
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
                className="m-6 mx-auto rounded-sm h-9 bg-blue-700 w-full"
                type="submit"
              >
                CREATE ACOUNT
              </button>
              <a className="flex justify-center sm:mx-auto" href="#">
                or Log in
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
