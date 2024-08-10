import '../Userstyles/Landingpage.css'
import lp from '../Userasset/lp.png'
import { useState } from 'react'
import Signin from './Signin';
import SignUp from './SignUp';
function Landingpage() {
    const[signpage,setSignPage] = useState(false);
    const handlePage = () => {
        setSignPage(true);
    }
    const[signuppage,setSignUpPage] = useState(false);
    const handlesignupPage = () => {
        setSignUpPage(true);
    }
    return (
        <div className="landing-page">
            <div className='landing-item'>
                <h1>Delightful <br/>Events</h1><br/>
                <p>starts here</p><br/>
                <p>You are an User</p><br/>
                <button className='get-start-button' onClick={handlePage}>Create Your Events</button>
                <div><button onClick={handlesignupPage} className='get-start-button'>SignUp</button></div>
            </div>
            <img src={lp} width={700} height={700} className='page-image'/>
            <div>
                {signpage &&
                <div className="over">
                    <Signin/>
                </div>
                }
                {signuppage &&
                <div className="">
                    <SignUp/>
                </div>
                }
            </div>
        </div>
    )
}
export default Landingpage