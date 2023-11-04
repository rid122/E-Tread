import Logo from '../assets/page_assets/page-8/asset 0.png'
import Bgimg from '../assets/page_assets/page-8/asset 1.jpeg'
export default function Resetpassward() {
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
                    <h1 className='text-3xl font-bold'>Reset Passward?</h1>
                    <div >
                        <div className='mt-8 relative'>
                            <label className='absolute top-[-12px] left-[20px] bg-white text-gray-500'>New Passward</label>
                            <input type="text" placeholder='...........' className='border-2 h-14 w-80 ps-2 pb-4  rounded-lg text-3xl' />
                        </div>
                        <div className='mt-8 relative'>
                            <label className='absolute top-[-12px] left-[20px] bg-white text-gray-500'>Conform Passward</label>
                            <input type="text" placeholder='..........' className='border h-14 w-80 ps-2 pb-4 rounded-lg text-3xl' />
                        </div>
                    </div>
                    <div className='pt-5 '>
                        <button type='button' className='h-14 w-64 bg-blue-500 rounded-lg text-white font-bold ' onClick={Resetpassward}>Reset Passward</button>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='pe-28 pt-16'>
                        <div className='flex'>
                            <p className='ps-28 pt-3 pr-8'>Already a Member?</p>
                            <button type='button' className='pt-2 rounded-xl'>Sign-In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}