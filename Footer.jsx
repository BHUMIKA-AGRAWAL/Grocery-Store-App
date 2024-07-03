import React from 'react';
import './Navbar.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="footer-heading">Contact Us</h3>
                        <p className="footer-info">Email: bhumikaagrawal2018@gmail.com</p>
                        <p className="footer-info">Phone: +91 8830021441</p>
                    </div>
                    <div>
                        <h3 className="footer-heading">Follow Us</h3>
                        <ul className="footer-social-links">
                            <li>
                                <a href="https://www.linkedin.com/in/bhumika-agrawal-2575171a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-divider" />
                <p className="footer-text">&copy; {new Date().getFullYear()} Grocery Store Company.</p>
            </div>
        </footer>
    );
}

export default Footer;
