import Image from 'next/image';
import Paracuando from '../Assets/SingupImg/Paracuando.png';
import TextSignup from '../Assets/SingupImg/textlogin.png';
import TextSignupbg from '../Assets/SingupImg/textloginbg.png';

const Signup = () => {
  return (
    <>
      <div className="flex">
        <div className='h-screen w-full bg-[url("../Assets/SingupImg/bg-Signup.png")] flex justify-center items-center content-center bg-cover bg-center bg-no-repeat'>
          <Image
            className="w-2/4"
            src={TextSignup}
            alt="marcas, artistas y torneos"
          />
          <Image className="w-1/4" src={TextSignupbg} alt="queretaro" />
        </div>
        <div className="w-full pt-[50px] flex flex-col">
          <div className="w-full">
            <Image className="mx-auto" src={Paracuando} alt="Paracuandotext" />
          </div>
          <div className="pl-10">
            <h1>
              <strong>Sign up</strong>
            </h1>
            <p>Login with the data you entered during your registration</p>
            <form className="pt-6 w-[85%]">
              <div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="border-2 rounded h-9"
                    type="text"
                    id="email"
                    required="email"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="flex  gap-8 w-full">
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      className="border-2 rounded h-9"
                      type="text"
                      id="name"
                      required="text"
                      placeholder="Erik"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      className="border-2 rounded h-9"
                      type="text"
                      id="lastname"
                      required="text"
                      placeholder="Perez"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    className="border-2 rounded h-9"
                    type="password"
                    id="password"
                    required="password"
                  />
                </div>
              </div>

              <button type="submit">create Account</button>
              <a href="#">Log in</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
