import './Nav.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';
import myLogo from '../Assets/icons/motech_logo.png';

const Nav = () => {

    const [isMobile, setisMobile] = useState(true);
    const [mobileIsClick, setMobileIsClick] = useState(false);
    const [removeAnimation, setRemoveAnimation] = useState(false);

    const { currentPath } = useContext(DataContext);

    const settingIsMobile = () => {
        if(window.innerWidth <= 960){
            setisMobile(true);
        } else
            setisMobile(false);    
    };

    const handleMobileClick = () => {
        if(isMobile && mobileIsClick){
            setRemoveAnimation(true);
            setTimeout(() => {
                setMobileIsClick(!mobileIsClick)
            }, 299);
        } else {
            setMobileIsClick(!mobileIsClick);
            setRemoveAnimation(false);
        }
    }

    window.addEventListener("resize", () => {
        if(isMobile && mobileIsClick && window.innerWidth > 960){
            setMobileIsClick(false);
            settingIsMobile();
        } else {
            settingIsMobile();
        }
    });

    const windowSmoothScrolling = (toPath) => {

        switch(toPath){
            case "Home": 
                if(currentPath === "Home"){
                    if(window.scrollY >= 0){
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    };
                };
                break;
            case "Services": 
                if(currentPath === "Services"){
                    if(window.scrollY >= 0){
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    };
                };
                break;
            case "Products": 
                if(currentPath === "Products"){
                    if(window.scrollY >= 0){
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    };
                };
                break;
        }
        
    };

    useEffect(() => {
        settingIsMobile();
    }, [])

    return (
        <div className='NavContainer'>

            

            <div className='Nav'>
                <div className='backDiv'>
                    <div className='backDiv2'></div>
                </div>
                <div className='navLogoContainer'
                    onClick={mobileIsClick ? handleMobileClick : null}
                >
                    <img src={myLogo} />
                    <h1 className='navLogo' onClick={() => windowSmoothScrolling("Home")}><Link to="motech/">MoTech</Link></h1>
                </div>
                <div className="navElementsContainer">

                    {isMobile && !mobileIsClick &&
                        <div className="menuBarDiv"
                        >   <span className="material-symbols-outlined"
                                onClick={handleMobileClick}            
                            > menu
                            </span>  
                        </div>
                    }

                    {isMobile && mobileIsClick && 
                        <div className="menuBarDiv"
                        >   <span className="material-symbols-outlined"
                                onClick={handleMobileClick}            
                            > close
                            </span>  
                        </div>
                    }

                    {!isMobile && 
                        <div className='desktop_div'>
                            <ul>
                                <Button 
                                    link={"motech/"}
                                    name={"Home"}
                                    sizeType={"middleSizeBtn"}
                                    buttonStyle={"navBarDesktopBtn"} 
                                    onClick={() => windowSmoothScrolling("Home")}
                                    selected={currentPath === "Home" ? "selected" : null} />
                                <Button 
                                    link={"motech/services"}
                                    name={"Services"}
                                    sizeType={"middleSizeBtn"}
                                    buttonStyle={"navBarDesktopBtn"} 
                                    onClick={() => windowSmoothScrolling("Services")}
                                    selected={currentPath === "Services" ? "selected" : null}  />
                                <Button 
                                    link={"motech/products"}
                                    name={"Products"}
                                    sizeType={"middleSizeBtn"}
                                    buttonStyle={"navBarDesktopBtn"}
                                    onClick={() => windowSmoothScrolling("Products")}
                                    selected={currentPath === "Products" ? "selected" : null} />
                                <Button 
                                    link={"motech/sign-up"}
                                    name={"Sign Up"}
                                    sizeType={"middleSizeBtn"}
                                    buttonStyle={"Sign-up"}
                                    selected={currentPath === "SignUp" ? "sign-up-selected" : null} />
                            </ul>
                        </div>  
                    }

                </div>

            </div>

            {mobileIsClick && isMobile &&
                <div className={`mobile_div ${removeAnimation ? "removeMobileDiv" : null}`}>
                    <ul>
                        <Button 
                            link={"motech/"}
                            name={"Home"}
                            sizeType={"middleSizeBtn"}
                            hoverClass={"mobileNavElements"}
                            handleClick={handleMobileClick}
                            onClick={() => windowSmoothScrolling("Home")} 
                            selected={currentPath === "Home" ? "selected" : null}  />
                        <Button 
                            link={"motech/services"}
                            name={"Services"}
                            sizeType={"middleSizeBtn"}
                            buttonStyle={"outlineTypeBtn"} 
                            hoverClass={"mobileNavElements"}
                            handleClick={handleMobileClick}
                            onClick={() => windowSmoothScrolling("Services")} 
                            selected={currentPath === "Services" ? "selected" : null}   />
                        <Button 
                            link={"motech/products"}
                            name={"Products"}
                            sizeType={"middleSizeBtn"}
                            buttonStyle={"outlineTypeBtn"} 
                            hoverClass={"mobileNavElements"}
                            handleClick={handleMobileClick}
                            onClick={() => windowSmoothScrolling("Products")}
                            selected={currentPath === "Products" ? "selected" : null}  />
                        <Button 
                            link={"motech/sign-up"}
                            name={"Sign Up"}
                            buttonSize={"largeSizeBtn"}
                            buttonStyle={"Sign-up"} 
                            handleClick={handleMobileClick}
                            selected={currentPath === "SignUp" ? "sign-up-selected" : null} />
                    </ul>
                </div>
            }
            
        </div>
    )

};

export default Nav;