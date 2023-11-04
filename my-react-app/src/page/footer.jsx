import Delivery from '../assets/home_assets/home-ele/asset 47.png'
import Gauranted from '../assets/home_assets/home-ele/asset 48.png'
import Policy from '../assets/home_assets/home-ele/asset 49.png'
import Support from '../assets/home_assets/home-ele/asset 50.png'
import Scaner from '../assets/home_assets/home-ele/asset 51.png'
import Applestore from '../assets/home_assets/home-ele/asset 52.png'
import Googlestore from '../assets/home_assets/home-ele/asset 53.png'
import Envelope from '../assets/other_assets/envelope.svg'
import Call from '../assets/other_assets/call.svg'
export default function Footer() {
  return (
    <>
      <div className="flex border-gray-100 border-b-2 mx-64 pb-10">
        <div className='flex  pt-20'>
          <div className=''>
            <img src={Delivery} alt="" />
          </div>
          <div className='ps-5'>
            <h1 >Fast & Secure Delivery</h1>
            <p className='pt-2 text-gray-500'>Tell About Your Service</p>
          </div>
        </div>
        <div className='flex ps-20 pt-20'>
          <div className=''>
            <img src={Gauranted} alt="" />
          </div>
          <div className='ps-5'>
            <h1 >Money Back Guarantee</h1>
            <p className='pt-2 text-gray-500'>Within 10 days.</p>
          </div>
        </div>
        <div className='flex ps-20 pt-20'>
          <div className=''>
            <img src={Policy} alt="" />
          </div>
          <div className='ps-5'>
            <h1 >24 Hour Return Policy</h1>
            <p className='pt-2 text-gray-500'>No question ask.</p>
          </div>
        </div>
        <div className='flex ps-20 pt-20'>
          <div className=''>
            <img src={Support} alt="" />
          </div>
          <div className='ps-5'>
            <h1 >Pro Quality Support</h1>
            <p className='pt-2 text-gray-500'>24/7 Live support.</p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='ps-60 pt-16'>
          <h1 className='font-bold'>Support</h1>
          <p className='pt-4 text-gray-500'>685 Market Street, <br />
            Las Vegas, LA 95820, <br />
            United States.</p>
          <div className='flex'>
            <img src={Envelope} className='h-16 -ml-6' alt="" />
            <p className='mt-3 -ml-2 text-gray-400'>example@domain.com</p>
          </div>
          <div className='flex'>
            <img src={Call} className='-ml-6 mb-52' alt="" />
            <p className='mt-3 text-gray-400'>(+01) 850-315-5862</p>
          </div>
        </div>
        <div className='ps-60 pt-16 '>
          <h1 className='font-bold'>Account</h1>
          <ul className='pt-3 text-gray-500'>
            <li className='pt-3'>My Account</li>
            <li className='pt-3'>Login / Register</li>
            <li className='pt-3'>Cart</li>
            <li className='pt-3'>Wishlist</li>
            <li className='pt-3'>Shop</li>
          </ul>
        </div>
        <div className='ps-60 pt-16'>
          <h1 className='font-bold'>Quick Link</h1>
          <ul className='pt-3 text-gray-500'>
            <li className='pt-3'>Privacy Policy</li>
            <li className='pt-3'>Terms Of Use</li>
            <li className='pt-3'>FAQ</li>
            <li className='pt-3'>Contact</li>
            <li className='pt-3'>Contact</li>
          </ul>
        </div>
        <div className=" pt-16 ps-60">
          <h1 className="font-bold ">Download App</h1>
          <p className="text-gray-500 pt-4">Save $3 With App & New User only</p>
          <div className="flex pt-3 ">
            <div className="">
              <img className="" src={Scaner}></img>
            </div>
            <div className=" ">
              <img className="mb-2 ml-5 cursor-pointer" src={Applestore}></img>
              <div className="">
                <img className="mt-3 ml-5 cursor-pointer" src={Googlestore}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}