import Header from './header'
import Colorline from '../assets/page_assets/page-12/asset 20.png'
import Footer from './footer'
export default function Typo() {
    return (
        <>
        <Header/>
            <div className="h-screen">
                <div className='text-center '>
                    <h1 className=' font-bold left-0 right-0  absolute text-white  pt-3'>STUDENT NOW GET 10% OFF: <span className='underline'>GET OFFER</span></h1>
                </div>
                <div>
                    <img src={Colorline} className='' alt="" />
                </div>
                <div className='flex'>
                    <div className="pl-64">
                        <h1 className="pt-20 font-sans font-semibold text-5xl">h1 - A Visual Type Scale</h1>
                        <h2 className="pt-5 font-semibold text-4xl font-sans">h2 - A Visual Type Scale</h2>
                        <h3 className="pt-5 font-sans text-3xl font-semibold">h3 - A Visual Type Scale</h3>
                        <h4 className=" pt-5 text-2xl font-semibold ">h4 - A Visual Type Scale</h4>
                        <h5 className="pt-5 text-xl font-semibold">h5 - A Visual Type Scale</h5>
                        <h6 className="pt-5 text-lg font-semibold">h6 - A Visual Type Scale</h6>
                    </div>
                    <div className="pl-32">
                        <h1 className="pt-20 font-semibold text-5xl font-sans">46px</h1>
                        <h2 className="pt-5 font-semibold text-4xl">36px</h2>
                        <h3 className="pt-5 text-3xl font-semibold ">28px</h3>
                        <h4 className="pt-5 font-semibold text-2xl">24px</h4>
                        <h5 className="pt-5 font-semibold text-xl ">20px</h5>
                        <h6 className="pt-5 font-semibold text-lg">18px</h6>
                    </div>
                </div>
                <div className='ps-64 pt-5 text-gray-500'>
                    <p className=' text-lg'>B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident <br />
                    quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam <br /> beatae 
                    itaque dicta vitae! Magni esse ex rem.</p>
                    <p className='pt-4 text-base'>B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident 
                    quos amet <br /> non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae 
                    itaque dicta <br /> vitae! Magni esse ex rem.</p>
                    <p className='pt-4 text-sm'>B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident 
                    quos amet non hic animi. <br /> Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque
                    dicta vitae! Magni esse ex rem.</p>
                </div>
                <Footer/>
            </div>
        </>
    )
}