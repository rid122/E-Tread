import Soon from '../assets/page_assets/page-10/asset 1.jpeg'
import Logo from '../assets/page_assets/page-10/asset 0.png'
export default function Comingsoon() {
    return (
        <>
            <div className='h-screen flex'>
                <div className=''>
                    <img src={Soon} className='h-screen' alt="" />
                </div>
                <div className=' '>
                    <div className=''>
                        <img src={Logo} className=' pt-72 pl-96' alt="" />
                    </div>
                    <h1 className='font-bold text-4xl pl-56 pt-4'>Our new website is on the way</h1>
                    <p className='text-base text-center text-gray-500 pt-4 pl-64'>We're coming soon! We're working hard to give you <br /> the best experince.</p>
                <div className='pt-5 ps-80 flex'>
                    <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 text- text-center rounded-full shadow-2xl'>0 <br /> day</p>
                    <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Hrs</p>
                    <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Min</p>
                    <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Sec</p>
                </div>
                </div>
            </div>
        </>
    )
}