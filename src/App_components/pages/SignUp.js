import './SignUp.css'
import captcha from '../../Assets/images/captcha.jpg'
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

const SignUp = () => {

    const { setIsFooter } = useContext(DataContext);
    const { setCurrentPath } = useContext(DataContext);

    setCurrentPath("SignUp");

    setIsFooter(false);

    return (
        
        <div className='SignUp'>

            <div className='backgroundSignPage'></div>

            <div className='contentSignPage'>
                <h2>Sign Up</h2>
                <form className='signUpForm' onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='Username'></input>
                    <input type='email' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <input type='password' placeholder='Confirm Password'></input>
                    <div className='checkForBots'>
                        <input type='text' id='checkForBots'></input>
                        <img src={captcha} />
                    </div>
                    <div className='RememberCheck'>
                        <input type='checkbox'></input>
                        <p>Remeber Account</p>
                    </div>
                    <button className='ConfirmBtn' type='submit'>
                        Confirm
                    </button>
                </form>        
                <hr />      
                <div className='alreadeRegistered'>
                    <p>Already have an account ?</p>
                    <button type='button'>Login</button>
                </div>
            </div>

        </div>
    )
};

export default SignUp;