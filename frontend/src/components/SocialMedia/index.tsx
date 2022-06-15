
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import "./index.scss"
const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsTwitter />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia