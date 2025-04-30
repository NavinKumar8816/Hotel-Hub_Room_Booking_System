import { Link } from 'react-router-dom';
import './CSS/OwnerHome.css';
import Navbar from './Navbar';
import Footer from './footer';
const OwnerHome = () => {
    return (
        <>
            <Navbar />
            <div className="card ">
                <div className="home-dark-overlay"></div>
                <img src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h2 className="card-title">Looking to Expand Your Business?</h2>
                    <h2 className="card-title"> Let&apos;s Collaborate!</h2>
                    <div className='home-div'>
                        <Link to='/AddRoom' className='home-btn1'>Join Now</Link>
                    </div>
                </div>
            </div>
            <div className="card ">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQHrhFCnBe7vtg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712079077091?e=2147483647&v=beta&t=msMR6UIoi20HiXbJ4nrcZmas4LcGVz4GcHoiyBwrcmM" className="card-img" alt="..." />
            </div>
            <div className="home-card-row">
                <div className="home-row-card">
                    <img src="https://newambikainternationalmanali.com/wp-content/uploads/2022/02/Super-Deluxe-Room-with-Balcony-scaled.jpg" className="home-card-img" alt="..." />
                    {/* <Link to='/room' className=' home-btn2 '>Company-Serviced</Link> */}
                    <h2 className="home-card-text-c1">Deluxe Room</h2>
                    <h2 className='star' >★★★★★</h2>
                    <p className="p1">This is a fantastic hotel. Our rooms were very comfortable. The hotel is convenient to the central area of Helsinki as well as to the train station. I only wish we could have stayed longer than just one night before continuing on to other parts of Finland.</p>
                </div>
                <div className="home-row-card">
                    <img src="https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800" className="home-card-img" alt="..." />
                    <div className="home-card-body">
                        <h2 className="home-card-text-c1">Luxury Bed Room</h2>
                        <h2 className='star' >★★★★★</h2>
                        <p className="p1">Great value for money stay near Helsinki station, location was fantastic, room was spacious a living room area flanked by the 2 rooms on each side , place was clean, staff were friendly, breakfast was great, water pressure was strong and water heater worked well.</p>
                    </div>
                </div>
                <div className="home-row-card">
                    <img src="https://chokhidhani.com/palace-hotel-jaisalmer/wp-content/uploads/2022/12/Royal-Room_img.jpeg" className="home-card-img" alt="..." />
                    <h2 className="home-card-text-c1">Couple Room</h2>
                    <h2 className='star' >★★★★★</h2>
                    <p className="p1">Feel always welcome
                        Quiet, clean, always so friendly and flexible staff . This hotel has been my unbeatable stay for more than twenty years. Throughout the years premises have been developed and concept upgraded without exaggeration but keeping promises!</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OwnerHome