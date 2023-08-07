import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/Ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/Bs';
import { TbTruckDelivery } from 'react-icons/Tb';
import { MdFavorite, MdHelp } from 'react-icons/Md';
import { FaUserFriends, FaWallet } from 'react-icons/Fa';
import { useState } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* menu and title */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <div>
                    <h1 className='text-2xl sm:text-3xl lg:txt-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
                </div>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* search */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[600px] xl:w-[800]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Food' />
            </div>

            {/* button  */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='pr-1' />Cart
            </button>

            {/* mobile menu  */}
            {/* overlay  */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0'></div> : ''}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={25} className='absolute top-4 right-4' onClick={() => setNav(false)} />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4'>
                        <li className='text-md py-4 flex'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                        <li className='text-md py-4 flex'><MdFavorite size={25} className='mr-4' />Favorites</li>
                        <li className='text-md py-4 flex'><FaWallet size={25} className='mr-4' />Wallets</li>
                        <li className='text-md py-4 flex'><MdHelp size={25} className='mr-4' />Help</li>
                        <li className='text-md py-4 flex'><AiFillTag size={25} className='mr-4' />Promotions</li>
                        <li className='text-md py-4 flex'><BsFillSaveFill size={25} className='mr-4' />Best One</li>
                        <li className='text-md py-4 flex'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar