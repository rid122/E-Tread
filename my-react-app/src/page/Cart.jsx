import Header from "./header"
import Line from '../assets/page_assets/page-2/asset 23.png'
import Mouse from '../assets/page_assets/page-2/asset 2.png'
import Bord from '../assets/page_assets/page-2/asset 3.png'
import Cctv from '../assets/page_assets/page-2/asset 4.png'
import Footer from "./footer"
import Hook from "./inc-dec"
export default function Cart() {
    return (
        <>
            <div>
                <Header />
                <div>
                    <div className='text-center '>
                        <h1 className=' font-bold left-0 right-0  absolute text-white  pt-3'>STUDENT NOW GET 10% OFF: <span className='underline'>GET OFFER</span></h1>
                    </div>
                    <div>
                        <img src={Line} className='' alt="" />
                    </div>
                    <div className="table-section ">
                        <div className="mx-64">
                            <h1 className="text-2xl text-gray-900 font-semibold  mt-20">
                                Your Cart
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="py-4 ml-64 bg-[#f6f7fb] flex justify-around w-9/12 items-center mt-5 text-xl font-semibold text-gray-800">
                    <p className="">Product</p>
                    <p className="ml-52">Price</p>
                    <p className="ml-40">Quantity</p>
                    <p className="mr-48">Subtotal</p>
                </div>
                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full font-bold'>X</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Mouse} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        Wireless PS Handler
                    </p>
                    <p className="text-[#777777] ml-28 font-semibold text-xl ">$124.00</p>
                    <Hook />
                    <p className="text-[#777777] text-xl font-semibold ps-36">$275.00</p>
                </div>
                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full font-bold'>X</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Bord} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        Gradient Light Keyboard
                    </p>
                    <p className="text-[#777777] ml-16 font-semibold text-xl ">$124.00</p>
                    <Hook />
                    <p className="text-[#777777] text-xl font-semibold ps-36">$275.00</p>
                </div>
                <div className="flex  mx-64 items-center border-gray-100 border-b-2">
                    <div className=' '>
                        <h1 className='text-center h-9 w-9 pt-2 bg-gray-300 rounded-full font-bold'>X</h1>
                    </div>
                    <img className="h-20 w-20 ml-10 mt-3 cursor-pointer" src={Cctv} alt />
                    <p className="text-xl font-semibold hover:text-blue-600 cursor-pointer ml-14 ">
                        HD CC Camera
                    </p>
                    <p className="text-[#777777] ml-40 font-semibold text-xl ">$124.00</p>
                    <Hook />
                    <p className="text-[#777777] text-xl font-semibold ps-36">$275.00</p>
                </div>
                <div className="mx-64  pt-5 flex">
                    <div className="border-gray-100 border-b-2 h-16 w-2/4 ">
                        <input type="text" placeholder="Enter coupen code" />
                    </div>
                    <div className="ps-4">
                        <button className="font-bold border-2 h-16 w-28 rounded hover:bg-blue-600 hover:text-white" onClick="Apply">Apply</button>
                    </div>
                    <div className="ps-96">
                        <button className="font-bold border-2 h-16 w-48  rounded hover:bg-blue-600 hover:text-white" onClick="Apply">Update cart</button>
                    </div>
                </div>
                <div className="grid text-start place-items-end ">
                    <div className="mt-28 ps-10 pe-10 pt-16 pb-16 bg-[#f9f3f0] rounded me-40">
                        <div className="">
                            <h1 className="text-2xl font-semibold pb-5 ">Order Summery</h1>
                            <div className="">
                                <table>
                                    <tr className="border-gray-300 border-b-2 mx-64 pb-5">
                                        <td className="pr-40 pb-10">Subtotal</td>
                                        <td className="pb-10">$117.00</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 mx-64 pb-5 ">
                                        <td className="pb-24 pt-10">Shipping</td>
                                        <td className="pb-12">
                                            <div>
                                                <input type="radio" id="radio1" name="Shipping" checked />
                                                <label htmlFor="radio1">Free Shipping</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="radio2" name="Shipping" checked />
                                                <label htmlFor="radio2">Local:$35.00</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="radio3" name="Shipping" checked />
                                                <label htmlFor="radio3">Flat Rate:$12.00</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 mx-64">
                                        <td className="pb-12">State Tax</td>
                                        <td className="pb-12">$8:00</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 mx-64 ">
                                        <td className="">Total</td>
                                        <td className=""><span className="text-[#3577f0] font-bold text-xl">$125.00</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="pt-4 font-semibold">
                            <button className="h-14 w-96 rounded text-white  text-center bg-[#3577f0]">Process To Checkout</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}