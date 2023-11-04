import Logo from '../assets/page_assets/page-5/asset 0.png'
import Bgimg from '../assets/page_assets/page-5/asset 1.jpeg'
export default function Forgetpassward() {
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
                    <h1 className='text-3xl font-bold'>Forgot Passward?</h1>
                    <p className='text-gray-400 pt-5'>Enter the email address you used when you joinedand we'll <br /> send you instructions to reset your passward.</p>
                    <div className='pt-10 relative'>
                        <label className='absolute top-[-20px] left-[20px] bg-white text-gray-500 mt-5'>Email</label>
                        <input type="text" placeholder='annie@example.com' className='border h-14 w-80 ps-2 rounded-lg' />
                    </div>
                    <div className='mt-20 '>
                            <button type='button' className='h-14 w-64 bg-blue-500 rounded-lg text-white font-bold '>Send Reset Instruction</button>
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