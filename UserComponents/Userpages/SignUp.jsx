import { useState } from 'react';
import '../Userstyles/SignUp.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function SignUp() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const history = useHistory();
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmitSignup = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5001/api/v1/userRegister",
                {
                name,
                email,
                password,
                },
            );
        
            console.log("Sign Up successful");
            console.log(response.data);
            history.push("/signup");
            setName("");
            setEmail("");
            setPassword("");
            } catch (error) {
            console.error("Registration failed");
            console.error(error); 
        }
    }
    return (
        <div className='signup-page'>
            <form onSubmit={handleSubmitSignup}>
                <div className='signup-box'>
                    <h2>Create Your Account</h2>
                    <input type='text' placeholder='Name'  value={name} onChange={handleName} />
                    <input type='text' placeholder='Email' value={email} onChange={handleEmail}/>
                    <input type='password' placeholder='Password' value={password} onChange={handlePassword}/>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp