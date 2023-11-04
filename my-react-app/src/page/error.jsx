import Header from './header'
import Colorline from '../assets/page_assets/page-11/asset 24.png'
import Exclamation from '../assets/page_assets/page-11/circle.svg'
import Err from '../assets/page_assets/page-11/asset 2.png'
import Footer from './footer'
export default function Error() {
    return (
        <>
        <Header/>
            <div className="h-screen ">
                <div className='text-center '>
                    <h1 className=' font-bold left-0 right-0  absolute text-white  pt-3'>STUDENT NOW GET 10% OFF: <span className='underline'>GET OFFER</span></h1>
                </div>
                <div>
                    <img src={Colorline} className='' alt="" />
                </div>
                <div className='flex'>
                    <div className=''>
                        <div className='flex pt-36 ps-52'>
                            <img src={Exclamation} className='' alt="" />
                            <p className='text-[#ff497c] font-semibold pt-3'>Oops! Somthing is Missing</p>
                        </div>
                        <div className='ps-56 '>
                            <h1 className='text-5xl font-semibold'>Page Not Found</h1>
                            <p className='pt-5'>It seems like we dont find what you searched. The page you were <br /> looking for doesn't exist, isn't available loading <br /> incorrectly.</p>
                        </div>
                        <div className='ps-56 pt-16'>
                            <button className='pl-16 pr-16 pt-3 pb-3  bg-[#ff497c] rounded-md text-white font-medium '>Back to Home</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={Err} className='h-5/6 pt-36 ps-44' alt="" />
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}