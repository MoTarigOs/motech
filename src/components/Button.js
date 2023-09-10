import { Link } from "react-router-dom"
import './Button.css'

const STYLE = [null, 
    "primaryBtn", 
    "btn-filled",
    "outlineBtn", 
    "navBarDesktopBtn", 
    "Sign-up",
    "footerBtn",
    "footerFormBtn",
    "footerHeaderBtn"];
const SIZE = ["middleSizeBtn", "largeSizeBtn"];

const Button = ({ 
    link, 
    name, 
    buttonStyle, 
    buttonSize,
    hoverClass,
    handleClick,
    onClick,
    selected,
    btnType }) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    const signUpSelected = () => {
        if(name === "Sign Up"){
            if(selected === "sign-up-selected")
                return true;
            return false
        }
        return false;
    };

    const sel = signUpSelected();

    return ( 
        <>
            {(sel === false) ? (
                <li className={
                    `${hoverClass ? hoverClass : null} ${selected ? selected : null}`}
                    onClick={handleClick ? handleClick : null}>                        
                        <Link to={link} onClick={onClick}>
                            <button
                            type={btnType ? btnType : null}
                            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                            >
                                {name}
                            </button> 
                        </Link>
                </li>
            ) : (
                <li className={
                    `${hoverClass ? hoverClass : null} ${selected ? selected : null} Sign-up-sel`}
                    onClick={handleClick ? handleClick : null}>          
                        <Link to={link} onClick={onClick}>
                            <button
                            className={`btn ${checkButtonSize}`}
                            >
                                {name}
                            </button> 
                        </Link>
                </li>
            )}
        </>
    )

};

export default Button;