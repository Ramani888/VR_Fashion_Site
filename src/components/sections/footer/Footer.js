import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../helper/UserHelper";
import { useDialog } from "../../Dialog/DialogContext";
import "./Footer.css"

const Footer = () => {
    const { openDialog } = useDialog();
    const navigate = useNavigate();
    const handleCartNavigate = () => {
        const userData = getUserData();
        if (userData) {
          navigate('/cart')
        } else {
          openDialog();
        }
    }
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.vr_fashion"
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(playStoreUrl)}`
    return (
        <footer>
        <div>
            <div>
            <h3>About Us</h3>
            <p>
                We are your one-stop shop for all your e-commerce needs. Quality products, great prices, and excellent
                customer service.
            </p>
            </div>
            <div>
            <h3>Quick Links</h3>
            <ul>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/shop-left">Products</a>
                </li>
                <li>
                    <a 
                        onClick={() => handleCartNavigate()} 
                        style={{ 
                            cursor: 'pointer', 
                            textDecoration: 'none', 
                            color: '#f8f8f8',
                            transition: 'color 0.6s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#fcd462'}
                        onMouseLeave={(e) => e.target.style.color = '#f8f8f8'}
                        >
                        Cart
                    </a>                
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
            </ul>
            </div>
            <div>
            <h3>Contact Us</h3>
            <p>Email: vrfashionjewellery0044@gmail.com</p>
            <p>Phone: +91 8141851456</p>
            <p>Address: A-34, 2nd Floor Laxmidhara Complex, Baroda Pristage, Varachha Road, Surat - 395006, Gujrat, India.</p>
            </div>
            <div>
            <h3>Get Our App</h3>
            <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code for Play Store" />
            {/* <p>Scan to download our app</p> */}
            </div>
        </div>
        <div>
            <p>&copy; 2025 Your E-commerce Store. All rights reserved.</p>
            <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer

