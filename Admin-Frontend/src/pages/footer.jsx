
import "@fortawesome/fontawesome-free/css/all.min.css";

import './css/footer.css';

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
                        <li><a href="/userdata">User</a></li>
                        <li><a href="/ownerdata">Owner</a></li>
                        <li><a href="/hoteldata">Hotels</a></li>
                        <li><a href="/bookroom">Book-Room</a></li>
                        
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
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
