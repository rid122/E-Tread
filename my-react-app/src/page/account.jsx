import Header from "./header"
import Line from '../assets/page_assets/page-4/asset 25.png'
import Dabo from '../assets/page_assets/page-4/asset 2.png'
import Girl from '../assets/page_assets/page-4/asset 3.png'
import Dashboard from "./Dashboard"
import Footer from "./footer"
export default function Account() {
    return (
        <>
        <Header/>
            <div className=" h-screen justify-between">
                <div className='text-center'>
                    <div className=' '>
                        <h1 className=' font-bold left-0 right-0  absolute text-white  pt-3'>STUDENT NOW GET 10% OFF: <span className='underline'>GET OFFER</span></h1>
                    </div>
                    <div>
                        <img src={Line} className='' alt="" />
                    </div>
                </div>
                <div className="bg-slate-100 h-52 ">
                    <div className=" flex">
                        <p className="ps-64 pt-10 text-base text-gray-500 font-semibold hover:text-blue-600">Home</p>
                        <p className="pt-10 pl-3 text-base text-gray-500 font-semibold">|</p>
                        <pre className="pt-10 pl-3 text-base text-blue-600 font-semibold">My Account</pre>
                    </div>
                    <div className="ps-64 text-4xl font-bold flex pt-3">
                        <p className=''>Explore All Products</p>
                        <div className='left-0 m-auto'>
                            <img src={Dabo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="ps-64 pt-20">
                    <img src={Girl} className="rounded-full" alt="" />
                    <h1 className="pt-2 text-2xl font-semibold">Hello Annie</h1>
                    <p className="text-gray-400 pt-2 text-sm">eTrade Member Since Sep 2020</p>
                </div>
                <div className="ps-64 pt-16 flex ">
                    <div className=" w-72 ps-4 pb-5 pt-3 border border-gray-400 rounded-lg">
                        <button> <Dashboard/></button>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        </>
    )
}

// <h1 className="pt-4">Dashboard</h1>
// <h1 className="pt-4">Orders</h1>
// <h1 className="pt-4">Downloads</h1>
// <h1 className="pt-4">Addresses</h1>
// <h1 className="pt-4">Account Details</h1>
// <h1 className="pt-4">Log Out</h1>