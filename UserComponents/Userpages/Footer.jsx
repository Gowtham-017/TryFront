import '../Userstyles/Footer.css'
import {FaInstagram,FaYoutube,FaTwitter,FaLinkedin,FaHeart} from 'react-icons/fa'
function Footer() {
    return (
        <div id='contact'>
            <div className="contact">
                <div className="row">
                    <div className="left">
                        <h2 className="aboutme">Contact</h2>
                        <div className="icons">
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaYoutube /></a>
                            <a href="/"><FaTwitter /></a>
                            <a href="/"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Your Queries</h2>
                        <form className='queryform'>
                            <input type="text" placeholder="Name" /><br/>
                            <input type="email" placeholder="Email" />
                            <textarea rows="6">Your Message here</textarea>
                            <button className="btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyrights@2024</p>
                <p>Designed with <FaHeart/></p>
            </div>
        </div>
    )
}
export default Footer