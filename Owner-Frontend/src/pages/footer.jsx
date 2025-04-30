
import "@fortawesome/fontawesome-free/css/all.min.css";

import './CSS/footer.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Experience premium value stays at unbeatable prices. Your comfort is our priority!</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/AddRoom">Add Room</a></li>
                        <li><a href="/RoomList">Room List</a></li>
                        <li><a href="/about">About</a></li>
                        {/* <li><a href="/contact">Contact</a></li> */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><p className="fab fa-facebook"></p></a>
                        <a href="#"><p className="fab fa-twitter"></p></a>
                        <a href="#"><p className="fab fa-instagram"></p></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 Hotel. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
