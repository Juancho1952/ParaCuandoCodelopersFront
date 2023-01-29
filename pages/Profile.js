import Image from 'next/image';
import ladygaga from '../Assets/Ladygaga.png';
import pc from '../Assets/pc.png';
import profile from '../Assets/PerfilFoto.png';
import tiendaropa from '../Assets/tiendapararopa.png';
import vector from '../Assets/Vector.png';
import Footer from '../components/Footer';



const Profile = () => {
  return <>
  
<div className="p-3 bg-black h-14">
    <div className="flex justify-between items-center">
            <Image src={pc} className="h-8 w-12 " alt="PCLogo"/>
        <ul className="flex flex-wrap  text-sm text-white">
            <li><a href="#" className="mr-1 hover:underline md:mr-4 ">+Create post</a></li>
            <li><a href="#" className="mr-1 hover:underline md:mr-4">❤ My votes</a></li>
            <li><button><a href="#" className="mr-1 hover:underline md:mr-4 ">🙎🏼‍♂️ erick@gmail.com</a></button></li>
        </ul>
    </div>
</div>

<div className='bg-blue-700 h-28 w-full'>
  <Image src={profile} className='h-[105] w-[105px]  relative left-[50%] top-[50%] -translate-x-2/4' alt="perfil"/>
</div>
<div className="pt-[70px] pb-12 max-w-none flex justify-center ">
          <button type="button" className="text-slate-400 py-1 px-5 mr-2  text-sm font-normal bg-white rounded-full border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">My votes
          </button>
          <button type="button" className="text-slate-400 py-1 px-5 mr-2  text-sm font-normal bg-white rounded-full border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">My posts
          </button>
</div>


<div className='flex flex-wrap justify-center'>

  <div className='p-3'>
    <div className="w-[300px] bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-white-700">
      <Image className="rounded-t-lg " src={tiendaropa} alt="" />
       <div className="p-5 h-56">
        <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">ZARA womens clothing store</h1>
        <p className="mb-3 font-ml text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="p-1 font-ml text-blue-600 dark:text-blue-600 underline">www.zara.com</p>
          <Image className='mt-2 h-4 w-4' src={vector} alt="vector" />  
       </div>
    </div>
  </div>

  <div className='p-3'>
    <div className="w-[300px]  bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-white-700">
      <Image className="rounded-t-lg" src={ladygaga} alt="" />
        <div className="p-5 h-56">
          
            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Lady Gaga concert</h1>
          
          <p className="mb-3 font-ml text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p className="p-1 font-ml text-blue-600 dark:text-blue-600 underline">ladygaga.com</p>
          <Image className='mt-2 h-4 w-4' src={vector} alt="" />  
        </div>
    </div>
  </div>


  <div className='p-3'>
    <div className="bg-2 max-w-[300px] bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-white-700">
      <Image className="rounded-t-lg" src={tiendaropa} alt="" />
        <div className="p-5 h-56">
          
           <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">ZARA womens clothing store</h1>
          
        <p className="mb-3 font-ml text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="p-1 font-ml text-blue-600 dark:text-blue-600 underline">www.zara.com</p>
          <Image className='mt-2 h-4 w-4' src={vector} alt="" />  
        </div>
    </div>
  </div>

  <div className='p-3'>
    <div className="bg-2 max-w-[300px] bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-white-700">
      <Image className="rounded-t-lg" src={ladygaga} alt="" />
        <div className="p-5 h-56">
          
            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Lady Gaga concert</h1>
      
          <p className="mb-3 font-ml text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p className="p-1 font-ml text-blue-600 dark:text-blue-600 underline">ladygaga.com</p>
          <Image className='mt-2 h-4 w-4' src={vector} alt="" />  
        </div>
    </div>
  </div>
</div>

<div className='p-3 flex justify-center mt-10 mb-10'>
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-7 py-2.5 text-center flex justify-center ">
    See more
  </button>
</div>
  

<Footer></Footer>
      

  </>
};

export default Profile;
