import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FooterSection: React.FC = () => {
    return (
        <footer className="flex items-center justify-center flex-col gap-6 h-60">
            <div className="flex items-center justify-center gap-8">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </div>
            <ul className="flex items-center justify-center gap-4 text-sm text-gray-900">
                <li><b>Conditions of Use</b></li>
                <li><b>Privacy & Policy</b></li>
                <li><b>Press Room</b></li>
            </ul>
            <div className="text-center text-gray-500 text-xs">
                <p>{`© 2021 MovieBox by Adriana Eka Prayudha`}</p>
            </div>
        </footer>  
    )
}

export default FooterSection;