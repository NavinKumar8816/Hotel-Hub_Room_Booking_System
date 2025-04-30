// import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Navbar from "./Navbar";
import Footer from './footer';

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-card bg-dark text-white">
                <div className="home-dark-overlay"></div>
                <img src="https://media.istockphoto.com/id/1400246708/photo/rearview-of-an-african-american-couple-spending-a-day-at-the-sea-together-content-boyfriend.jpg?s=612x612&w=0&k=20&c=iWumlhNM0Yxn-cV0sybzyb9RfEHVZTWW_64fpNhQb2o=" className="home-card-img" alt="..." />
                <div className="home-card-img-overlay">
                    <span className='home-card-content1'>
                        <h5 className="home-card-title1">Fall in Love with Every Stay <br /> Book Your Dream Hotel Now!</h5>
                        <div className='home-div'>
                            <Link to='/room' className='home-btn1'>Book now</Link>
                        </div>
                    </span>
                </div>
            </div>
            <div className="home-card bg-dark text-white">
                <div className="home-dark-overlay"></div>
                <img src="https://media.istockphoto.com/id/471764846/photo/modern-architecture-beautiful-bedroom.jpg?s=612x612&w=0&k=20&c=7om-IW7fLWHu-6lQ03MX2v1L0w6KYS8kqOFD8ZWFMpE=" className="home-card-img" alt="..." />
                <div className="home-card-img-overlay">
                    <span className='home-card-content2'>
                        <h5 className="home-card-title2">In a  Great Hotel, You Don&apos;t<br />Just Stay, You Belong
                        </h5>
                    </span>
                </div>
            </div>
            <Link className='img-link' to='/room'>
                <div className="home-card-row">
                    <div className="home-row-card">
                        {/* <div className="home-dark-overlay"></div> */}
                        <img src="https://c4.wallpaperflare.com/wallpaper/127/96/950/building-house-mansions-hdr-wallpaper-preview.jpg" className="home-card-img" alt="..." />
                        {/* <Link to='/room' className=' home-btn2 '>Company-Serviced</Link> */}
                        <h2 className="home-card-text-c1">India&apos;s no 1 premium<br /> value hotels</h2>
                    </div>
                    <div className="home-row-card">
                        <img src="https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=" className="home-card-img" alt="..." />
                        <div className="home-card-body">
                            <ul>
                                <li>Assured Check-in</li>
                                <li>Spacious clean Rooms</li>
                                <li>1000+ new properties</li>
                            </ul>
                            {/* <Link to='/room' className='btn btn-outline-primary mb-2'>Book now</Link> */}
                        </div>
                    </div>
                    <div className="home-row-card">
                        <img src="https://img.freepik.com/free-psd/20-percent-discount-offer-3d-neon-banner-template_47987-12630.jpg?t=st=1739033820~exp=1739037420~hmac=78d97ef7bf080e7b8c485519f1b8e1db5acad986e4318d0286d79858a18c9ced&w=900" className="home-card-img" alt="..." />
                        <h4 className="home-row-title">Exclusive Offer </h4>
                        <p className="home-row-text">Book early and save up to 20%.</p>
                    </div>
                </div>
                <h2 className='rating-room'>Explore Amazing Rooms</h2>

                <div className="home-card-row">
                    <div className="home-row-card">
                        {/* <div className="home-dark-overlay"></div> */}
                        <img src="https://newambikainternationalmanali.com/wp-content/uploads/2022/02/Super-Deluxe-Room-with-Balcony-scaled.jpg" className="home-card-img" alt="..." />
                        {/* <Link to='/room' className=' home-btn2 '>Company-Serviced</Link> */}
                        <h2 className="home-card-text-c1">Deluxe Room</h2>
                        <h2 className='star' >★★★★★</h2>
                        <p className='p1'>This is a fantastic hotel. Our rooms were very comfortable. The hotel is convenient to the central area of Helsinki as well as to the train station. I only wish we could have stayed longer than just one night before continuing on to other parts of Finland.</p>
                    </div>
                    <div className="home-row-card">
                        <img src="https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800" className="home-card-img" alt="..." />
                        <div className="home-card-body">
                            <h2 className="home-card-text-c1">Luxury Bed Room</h2>
                            <h2 className='star' >★★★★★</h2>
                            <p className='p1'>Great value for money stay near Helsinki station, location was fantastic, room was spacious a living room area flanked by the 2 rooms on each side , place was clean, staff were friendly, breakfast was great, water pressure was strong and water heater worked well.</p>
                        </div>
                    </div>
                    <div className="home-row-card">
                        <img src="https://chokhidhani.com/palace-hotel-jaisalmer/wp-content/uploads/2022/12/Royal-Room_img.jpeg" className="home-card-img" alt="..." />
                        <h2 className="home-card-text-c1">Couple Room</h2>
                        <h2 className='star' >★★★★★</h2>
                        <p className='p1'>Feel always welcome
                            Quiet, clean, always so friendly and flexible staff. This hotel has been my unbeatable stay for more than twenty years. Throughout the years premises have been developed and concept upgraded without exaggeration but keeping promises!</p>
                    </div>
                </div>
            </Link>
            <Footer />
        </>
    )
}

export default Home
