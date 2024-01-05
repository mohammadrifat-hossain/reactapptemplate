import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import { MdMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLock, FaUser, FaPenNib, FaPen, FaSearch  } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { ImQuill } from "react-icons/im";
import { IoTelescope } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const userInfo =true
    const location = useLocation()
    const pathname = location.pathname

    const [navOpen,setNavOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    const links = [
        {
            title:"Home",
            icon: <GoHomeFill />,
            url: "/"
        },
        {
            title:"Blog",
            icon: <HiOutlineNewspaper />,
            url: "/blog"
        },
        {
            title:"Inspiration",
            icon: <ImQuill />,
            url: "/inspiration"
        },
        {
            title:"Authors",
            icon: <FaPenNib  />,
            url: "/authors"
        },
        {
            title:"About",
            icon: <IoTelescope />,
            url: "/about"
        },
    ]
    return (
        <div className='w-full shadow-md bg-white z-[9999]'>
            <div className='w-full py-2 bg-[#dfdfdf] md-lg:hidden'>
                <div className='w-[85%] mx-auto flex items-center justify-between'>
                    <div className='flex items-center justify-center text-center gap-5 text-slate-500'>
                        <div className='flex items-center justify-center gap-1'>
                            <span><MdMailOutline/> </span>
                            <span className='-mt-[2px]'>mohammadrifat.hossain.rk@gmail.com</span>
                        </div>
                        <div className='h-[20px] w-[1px] bg-slate-400'></div>
                        <div>
                            <span>Whispered Wonders, Written Beautifully.</span>
                        </div>
                    </div>
                    <div className='text-slate-500'>
                        <div className='flex items-center justify-center gap-4'>
                            <div className='flex items-center justify-center gap-4 text-lg'>
                                <span><FaFacebook/></span>
                                <span><FaInstagram /></span>
                                <span><FaLinkedin /></span>
                                <span><FaTwitter /></span>
                            </div>
                            <div className='h-[20px] w-[1px] bg-slate-400'></div>
                            <div>
                                {
                                    !userInfo ? <Link to={'/login'} className='flex items-center justify-center gap-2 hover:bg-[#ccc] px-2 rounded duration-300'>
                                        <span><FaLock/></span>
                                        <span>Login</span>
                                    </Link> : <Link to={'/profile'} className='flex items-center justify-center gap-2 hover:bg-[#ccc] px-2 rounded duration-300'>
                                        <span><FaUser/></span>
                                        <span>{userInfo?.name}</span>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] lg:w-[95%] mx-auto px-4 md:px-2 py-2'>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <Link to={'/'} className=' relative block'>
                            <img src='https://res.cloudinary.com/dgbf3zt5b/image/upload/v1704371864/Free-Logo-Maker-Get-Custom-Logo-Designs-in-Minutes-Looka_1_flcbix.png' alt="logo" width={220} className='rounded'/>
                        </Link>
                        <div className='md-lg:hidden flex items-center justify-evenly px-5 py-2 relative '>
                            <input type="text" placeholder='Search...' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='px-4 py-2 rounded-full border outline-none border-[#0000003d] pr-10 w-[200px]'/>
                            <span className='mx-2 text-2xl absolute right-6'><FaSearch/></span>
                        </div>
                        <div className='flex items-center  justify-center gap-10 md-lg:hidden'>
                            <div className='flex items-center justify-center gap-6 uppercase font-[900] text-slate-500'>
                                {
                                    links.map((item,i) =>(
                                        <Link key={i} to={item.url} className=''>
                                            <span className={` ${item.url  === pathname ? 'text-indigo-500':'hover:text-slate-600'} duration-300`}>{item.title}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                            <Link to={'/post'} className='flex  items-center justify-center gap-1 uppercase font-[900] bg-indigo-500 text-white px-2 py-1 rounded'>
                                <span><FaPen/></span>
                                <span>Post</span>
                            </Link>
                        </div>
                        <div className='hidden md-lg:flex'>
                            <div>
                                <FaBarsStaggered className={`text-2xl cursor-pointer ${!navOpen ? 'block':'hidden'}`} onClick={()=>setNavOpen(true)}/>
                                <FaTimes className={`text-2xl cursor-pointer ${navOpen ? 'block':'hidden'}`} onClick={()=>setNavOpen(true)}/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div onClick={()=> setNavOpen(false)} className={`fixed h-full w-full bg-[#00000041] top-0 left-0 ${navOpen ? 'flex':'hidden'}`}>
                
            </div>
            <div className={`fixed bg-white w-[300px] h-full duration-200 transition-all top-0 z-[99999] ${navOpen ? 'left-[2px]':'-left-[300px]'}`}>
                <div className='py-2 px-4'>
                    <div>
                        <Link to={'/'} className=' relative block'>
                            <img src='https://res.cloudinary.com/dgbf3zt5b/image/upload/v1704371864/Free-Logo-Maker-Get-Custom-Logo-Designs-in-Minutes-Looka_1_flcbix.png' alt="logo" width={220} className='rounded'/>
                        </Link>
                    </div>
                    <div className='flex items-center justify-evenly px-5 py-2'>
                        <input type="text" placeholder='Search...' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='px-4 py-2 rounded-full border outline-none border-[#0000003d]'/>
                        <span className='mx-2 text-2xl'><FaSearch/></span>
                    </div>
                    <div>
                        {
                            userInfo ? <Link to={'/login'} className='flex items-center justify-center gap-2 hover:bg-[#ccc] px-2 rounded duration-300 text-xl'>
                                <span><FaLock/></span>
                                <span>Login</span>
                            </Link> : <Link to={'/profile'} className='flex items-center justify-center gap-2 hover:bg-[#ccc] px-2 rounded duration-300 text-xl'>
                                <span><FaUser/></span>
                                <span>{userInfo?.name}</span>
                            </Link>
                        }
                    </div>
                    <div className='my-3'>
                        <Link to={'/post'} className='flex  items-center justify-center gap-1 uppercase font-[900] bg-indigo-500 text-white px-2 py-1 rounded'>
                            <span><FaPen/></span>
                            <span>Post</span>
                        </Link>
                    </div>
                    <div className='mt-12 flex items-center flex-col justify-center gap-6 uppercase font-[900] text-slate-500'>
                        {
                            links.map((item,i) =>(
                                <Link key={i} to={item.url} className=''>
                                    <span className={` ${item.url  === pathname ? 'text-indigo-500':'hover:text-slate-600'} duration-300`}>{item.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='absolute left-0 bottom-0 p-2  text-slate-500'>
                    <div className='flex items-center justify-center gap-1'>
                        <span><MdMailOutline/> </span>
                        <span className='-mt-[2px] text-sm'>mohammadrifat.hossain.rk@gmail.com</span>
                    </div>
                    <div className='flex items-center justify-center gap-4 text-lg'>
                        <span><FaFacebook/></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                        <span><FaTwitter /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header