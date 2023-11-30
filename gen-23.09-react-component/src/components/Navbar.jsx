import { IconFileInfo, IconFriends, IconHeart, IconHeartFilled, IconHelp, IconMenu2, IconSearch, IconShoppingBag, IconShoppingCart, IconStarFilled, IconTruckDelivery, IconUser, IconWallet, IconX } from '@tabler/icons-react';
import React, {useState} from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    // <div className='fixed bg-white top-0 left-0 right-0 '>
      <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left side */}
        <div className='flex items-center'>
          <div onClick={()=> setNav(!nav)} className='cursor-pointer hover:text-primary'>
            <IconMenu2 size={30} />
          </div>
          <a href="#">
            <img src="/public/images/logo.png" className='w-32' />
          </a>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
            Beauty <span className='font-bold text-primary'>Fashion</span>
          </h1>
          <div className='hidden ml-4 lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='p-2 font-semibold hover:text-primary'>Home</p>
            <p className='p-2 font-semibold hover:text-primary'>Brand</p>
            <p className='p-2 font-semibold hover:text-primary'>Shop</p>
          </div>
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'> 
          <IconSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search here' />
        </div>
        {/* Right side */}
        <div className='flex items-center space-x-4'>
          <a href="#" className='text-center text-gray-700 hover:text-primary transition relative'>
            <div className='text-2xl'>
              <IconHeart size={25} className='mr-2'/>
            </div>
            <div className='text-xs leading-3'>Fav</div>
              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>99</span>
          </a>
          <a href="#" className='text-center text-gray-700 hover:text-primary transition relative'>
            <div className='text-2xl'>
              <IconShoppingBag size={25} className='mr-2'/>
            </div>
            <div className='text-xs leading-3'>Cart</div>
              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>99</span>
          </a>
          <a href="#" className='text-center text-gray-700 hover:text-primary transition relative'>
            <div className='text-2xl'>
              <IconUser size={25} className='mr-2'/>
            </div>
            <div className='text-xs leading-3'>Account</div>
          </a>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
          <IconX onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
          <h2 className='text-2xl p-4 font-bold'>Beauty <span className='font-bold text-primary'>Fashion</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex hover:text-primary'><IconTruckDelivery size={25} className='mr-4' /> Orders</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconHeartFilled size={25} className='mr-4' /> Favorites</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconWallet size={25} className='mr-4' /> Wallet</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconHelp size={25} className='mr-4' /> Help</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconFileInfo size={25} className='mr-4' /> Promotions</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconStarFilled size={25} className='mr-4' /> Best Ones</li>
              <li className='text-xl py-4 flex hover:text-primary'><IconFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
          </nav>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
