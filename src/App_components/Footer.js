import Button from '../components/Button';
import './Footer.css';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';

const Footer = ({ myRef, sendTextRef }) => {

    const { isFooter } = useContext(DataContext);
    const [sendValue, setSendValue] = useState("");

    const windowSmoothScrolling = () => {
        if(window.scrollY >= 0){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    const myFacebookUrl = "https://www.facebook.com/profile.php?id=100029916982623";
    const myWhatsappUrl = "https://wa.me/00249994597261";
    const myLinkedInUrl = "";
    const myGitHubUrl = "https://github.com/motarigos";
    const myInstagramUrl = "";

    const clearSendField = (e) => {
        e.preventDefault();
        setSendValue("");
    }

    return (
        
        <>
        {isFooter ? (
            <div className='Footer' ref={myRef}>

                <div className='footerTopSec'>
                    <p>Your passion for technology will increase by knowing its aspects</p>

                    <form className='footerForm' onSubmit={(e) => clearSendField(e)}>
                        <label>Send us message :</label>
                        <div>
                            <input type='text' ref={sendTextRef}
                                placeholder='Enter message to send'   
                                value={sendValue}
                                onChange={(e) => setSendValue(e.target.value)}
                            ></input>
                            <Button 
                                btnType={"submit"}
                                name={"Send"}
                                buttonStyle={"footerFormBtn"}
                                buttonSize={"middleSizeBtn"}
                                onClick={(e) => clearSendField(e)}
                            />
                        </div>
                    </form>
                </div>
                
                <div className='footerMidSec'>
                    <div className='footerMidSecUls'>
                        <ul>
                            <Button
                                name={"About Us"}
                                buttonStyle={"footerHeaderBtn"}
                                buttonSize={"largeSizeBtn"}
                            />
                            <Button
                                name={"Location"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Investors"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Stock"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Companies"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Students"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                        </ul>

                        <ul>
                            <Button
                                name={"Our Companies"}
                                buttonStyle={"footerHeaderBtn"}
                                buttonSize={"largeSizeBtn"}
                            />
                            <Button
                                name={"Ja tech Ma"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Son Of Tech"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Hard Coders"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Brain Machine"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                        </ul>
                    </div>
                    <div className='footerMidSecUls'>
                        <ul>
                            <Button
                                name={"Contact Us"}
                                buttonStyle={"footerHeaderBtn"}
                                buttonSize={"largeSizeBtn"}
                            />
                            <Button
                                name={"Facebook"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Whatsapp"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"LinkedIn"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Instagram"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                        </ul>

                        <ul>
                            <Button
                                name={"Join Our Team"}
                                buttonStyle={"footerHeaderBtn"}
                                buttonSize={"largeSizeBtn"}
                            />
                            <Button
                                name={"FullTime employ"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"HalfTime employ"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Student"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                            <Button
                                name={"Investor"}
                                buttonStyle={"footerBtn"}
                                buttonSize={"middleSizeBtn"}
                            />
                        </ul>
                    </div>
                </div>

                <div className='footerBottom'>
                    <div className='navLogoContainer'>
                        <h1 className='navLogo' onClick={windowSmoothScrolling}>MoTech</h1>
                    </div>

                    <p>Motech &copy; 2023</p>
                    
                    <div className='footerLogos'>
                        <a href={myFacebookUrl} className='icon facebook' target='_blank'></a>
                        <a href={myWhatsappUrl} className='icon whatsapp' target='_blank'></a>
                        <a href={myLinkedInUrl} className='icon Linkedin' target='_blank'></a>
                        <a href={myGitHubUrl} className='icon GitHub' target='_blank'></a>
                        <a threfo={myInstagramUrl} className='icon instagram' target='_blank'></a>
                    </div>
                </div>
            </div>
        ) : (null)}
        </>
    )
};

export default Footer;