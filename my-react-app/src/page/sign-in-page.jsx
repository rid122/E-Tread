import Logo from '../assets/page_assets/page-6/asset 0.png'
import Bgimg from '../assets/page_assets/page-6/asset 1.jpeg'
export default function Signin() {
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
                    <p className='font-bold text-3xl'>Sign in to e-Tread</p>
                    <div>
                        <p className='text-gray-400 pt-3'>Enter your detail below</p>
                    </div>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[30px] left-[20px] bg-white text-gray-500'>Email </label>
                        <input type="text" placeholder='annie@example.com' className='border h-14 w-80 ps-2 rounded-lg' />
                    </div>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[30px] left-[20px] bg-white text-gray-500'>Password </label>
                        <input type="text" placeholder='........' className='border text-3xl pb-3 h-14 w-80 ps-2 rounded-lg' />
                    </div>
                    <div className='flex '>
                        <div className='pt-5 '>
                            <button type='button' className='h-16 w-32 bg-blue-500 rounded-lg text-white font-bold '>Sign-in</button>
                        </div>
                        <div className='pt-16 ps-16 text-sky-700'>Forget passward?</div>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='pe-28 pt-16'>
                        <div className='flex'>
                            <p className='ps-28 pt-3 pr-8'>Not a Member?</p>
                            <button type='button' className='h-14 w-32 bg-rose-500 rounded-xl text-white font-bold '>Sign-Up Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}