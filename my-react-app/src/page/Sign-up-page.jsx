import Logo from '../assets/page_assets/page-5/asset 0.png'
import Bgimg from '../assets/page_assets/page-5/asset 1.jpeg'
export default function Signup() {
    return (
        <>
            <div className='h-screen flex justify-between'>
                <div className='text-center flex absolute '>
                    <div className='grid col-span-2 ps-28 pt-16'>
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className='absolute ps-36 pt-52 font-medium text-3xl'>
                    <p>We Offer The Best Prodect</p>
                </div>
                <div className=''>
                    <img src={Bgimg} className='h-screen' alt="" />
                </div>
                <div className='pt-52 ps-52'>
                    <p className='font-bold text-3xl'>I'm New Here</p>
                    <div>
                        <p className='text-gray-400 pt-3'>Enter your detail below</p>
                    </div>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[29px] left-[20px] bg-white text-gray-500'>User Name </label>
                        <input type="text" placeholder='anniemario' className='border h-14 w-80 ps-2 rounded-lg' />
                    </div>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[29px] left-[20px] bg-white text-gray-500'>Email </label>
                        <input type="text" placeholder='annie@example.com' className='border h-14 w-80 ps-2 rounded-lg' /> 
                    </div>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[29px] left-[20px] bg-white text-gray-500'>Password </label>
                        <input type="text" placeholder='........' className='border text-3xl pb-3 h-14 w-80 ps-2 rounded-lg' />
                    </div>
                    <div className='pt-5'>
                        <button type='button' className='h-16 w-52 bg-blue-500 rounded-lg text-white font-bold '>Create Account</button>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='pe-28 pt-16'>
                        <div className='flex'>
                            <p className='ps-28 pt-3 pr-8'>Already a Member?</p>
                            <button type='button' className='h-14 w-32 bg-rose-500 rounded-xl text-white font-bold hover:'>Sign-In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
