// About.jsx
// import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import './css/about.css';

function About() {
    return (
        <>
            <Navbar />
            <div className="about-section">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to India&apos;s No.1 Premium Value Hotels! We provide guests with the perfect blend of comfort, style, and affordability.
                    Our hotel network is built to cater to travelers seeking a luxurious stay without compromising on quality.
                </p>
                <div className="about-features">
                    <div className="about-card">
                        <img src="https://media.istockphoto.com/id/471764846/photo/modern-architecture-beautiful-bedroom.jpg?s=612x612&w=0&k=20&c=7om-IW7fLWHu-6lQ03MX2v1L0w6KYS8kqOFD8ZWFMpE=" alt="Premium Stay" />
                        <h3>Premium Stays</h3>
                        <p>Enjoy spacious and well-maintained rooms designed for your ultimate comfort.</p>
                    </div>
                    <div className="about-card">
                        <img src="https://www.shutterstock.com/image-photo/assorted-indian-food-set-on-260nw-796385446.jpg" alt="Delicious Meals" />
                        <h3>Delicious Meals</h3>
                        <p>Relish mouth-watering delicacies with our thoughtfully curated menus.</p>
                    </div>
                    <div className="about-card">
                        <img src="https://img.freepik.com/premium-vector/free-24-week-service-vector-art-design_489955-686.jpg?ga=GA1.1.287117523.1726163536&semt=ais_hybrid" alt="24/7 Service" />
                        <h3>24/7 Customer Service</h3>
                        <p>We are always here to assist you, ensuring your stay is pleasant and hassle-free.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
