import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/home_assets/home-ele/asset 0.png'
import Search from '../assets/other_assets/search.svg'
import Heart from '../assets/other_assets/heart.svg'
import Cart from '../assets/other_assets/cart.svg'
import Person from '../assets/other_assets/person.svg'

export default function Header() {
    return (
        <>
            <div className="main header ">
                <div className='bg-black text-white'>
                    <div className="header flex justify-between ">
                        <div className="left-section flex text-right ps-52 ">
                            <Dropdown className=''>
                                <Dropdown.Toggle className='focus:border-none text-white' variant="" id="">English</Dropdown.Toggle>

                                <Dropdown.Menu className=''>
                                    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className='focus:border-none text-white' variant="" id="">USD</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className=''>
                            <ul className='flex pe-56'>
                                <li className='pr-8'>Help</li>
                                <li className='pr-8'>Join Us</li>
                                <li className='pr-8'>Sign In</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="flex bg-white rounded-2xl  ">
                        <img src={Logo} className='p-10 ps-52' alt="" />
                        <ul className='flex justify-center mt-5 font-bold'>
                            <div className='ps-40'>
                                <Dropdown className='relative font-bold mx-7 border-b-[3px]  border-black'>
                                    <Dropdown.Toggle className='focus:border-none font-bold relative border-b-[3px]' variant="" id="">Home</Dropdown.Toggle>

                                    <Dropdown.Menu className='bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[30%] top-28 absolute  border-black cursor-pointer  group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6'>
                                        <Dropdown.Item href="#/action-1" className='bg-white font-normal text-[#ff497c] '>Home-Elecctronics</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-NFT</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Fashion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Jewellery</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Furniture</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Multipurpose</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">RTL-Version</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='ps-2'>
                                <Dropdown className='relative font-bold mx-7 border-b-[3px]  border-black' typeof='button'>
                                    <Dropdown.Toggle className='focus:border-none font-bold relative border-b-[3px]' variant="" id="">Shop</Dropdown.Toggle>

                                    <Dropdown.Menu className='bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[30%] top-28 absolute  border-black cursor-pointer  group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6'>
                                        <Dropdown.Item href="#/action-1" className='bg-white font-normal text-[#ff497c] '>Shop With Slidebar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="bg-white font-normal hover:text-[#ff497c] duration-300">Shop No Slidebar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 4</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 5</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 6</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 7</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Product-Variation 8</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='ps-2'>
                                <Dropdown className='relative font-bold mx-7 border-b-[3px]  border-black' typeof='button'>
                                    <Dropdown.Toggle className='focus:border-none font-bold relative border-b-[3px]' variant="" id="">Pages</Dropdown.Toggle>

                                    <Dropdown.Menu className='bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[30%] top-28 absolute  border-black cursor-pointer  group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6'>
                                        <Dropdown.Item href="#/action-1" className='bg-white font-normal text-[#ff497c] '>Wishlist</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="bg-white font-normal hover:text-[#ff497c] duration-300">Cart</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Chechout</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Accout</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Sign Up</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Sign In</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Forget passward</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Reset Passward</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Privacy Policy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Coming Soon</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">404 Error</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Typography</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pt-2 ps-3'>About</div>
                            <div className='ps-2'>
                                <Dropdown className='relative font-bold mx-7 border-b-[3px]  border-black' typeof='button'>
                                    <Dropdown.Toggle className='focus:border-none font-bold relative border-b-[3px]' variant="" id="">Blog</Dropdown.Toggle>

                                    <Dropdown.Menu className='bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[30%] top-28 absolute  border-black cursor-pointer  group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6'>
                                        <Dropdown.Item href="#/action-1" className='bg-white font-normal text-[#ff497c]'>Blog List</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="bg-white font-normal hover:text-[#ff497c] duration-300">Blog Grid</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Standard Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Gallery Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Video Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Audio Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="bg-white font-normal hover:text-[#ff497c] duration-300">Quote Post</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pt-2'>Contact</div>
                            <div className='pl-16 pt-2 font-normal'>
                                <div className=' border border-gray-500 rounded-xl h-10 w-72 text-center text-gray-500'>
                                    <button>What are you looking for</button>
                                </div>
                            </div>
                        </ul>
                        <div className='flex mt-4'>
                            <img src={Search} className='' alt="" />
                            <img src={Heart} className='' alt="" />
                            <img src={Cart} alt="" />
                            <img src={Person} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}       