import Header from './header'
import Line from '../assets/page_assets/page-1/asset 23.png'
import Mouse from '../assets/page_assets/page-1/asset 2.png'
import Bord from '../assets/page_assets/page-1/asset 3.png'
import Cctv from '../assets/page_assets/page-1/asset 4.png'
import Footer from './footer'
export default function Wishlist() {
    return (
        <>
        <Header/>
            <div className="">
                <div className='text-center '>
                    <h1 className=' font-bold left-0 right-0  absolute text-white  pt-3'>STUDENT NOW GET 10% OFF: <span className='underline'>GET OFFER</span></h1>
                </div>
                <div>
                    <img src={Line} className='' alt="" />
                </div>

                <div className="table-section ">
                    <div className="mx-64">
                        <h1 className="text-2xl text-gray-900 font-semibold  mt-20">
                            My Wish List On eTrade
                        </h1>
                    </div>
                </div>


                <div className="py-4 ml-64 bg-[#f6f7fb] flex justify-around w-9/12 items-center mt-5 text-xl font-semibold text-gray-800">
                    <p className="">Product</p>
                    <p className="ml-52">Unit Price</p>
                    <p className="mr-48">Stoke Status</p>
                </div>

                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full'>x</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Mouse} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        Wireless PS Handler
                    </p>
                    <p className="text-[#777777] ml-60 font-semibold text-xl ">$124.00</p>
                    <p className="text-[#777777] ml-72 font-semibold text-xl">	In Stock</p>
                    <button className="hover:bg-blue-700 hover:text-white   font-semibold border border-gray-600 p-2 rounded ml-52" >add to cart</button>
                </div>

                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full'>x</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Bord} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        Gradient Light Keyboard
                    </p>
                    <p className="text-[#777777] ml-48 font-semibold text-xl ">$124.00</p>
                    <p className="text-[#777777] ml-[21%] font-semibold text-xl">	In Stock</p>
                    <button className="hover:bg-blue-700 hover:text-white   font-semibold border border-gray-600 p-2 rounded ml-52 " >add to cart</button>
                </div>

                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full'>x</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Cctv} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        HD CC Camera
                    </p>
                    <p className="text-[#777777] ml-72 font-semibold text-xl ">$124.00</p>
                    <p className="text-[#777777] ml-72 font-semibold text-xl">	In Stock</p>
                    <button className="hover:bg-blue-700 hover:text-white   font-semibold border border-gray-600 p-2 rounded ml-52" >add to cart</button>
                </div>

            </div>
            <Footer/>
        </>
    )
}