import './Card2.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const Card2 = ({ id, image, description, price }) => {

    const { 
        setCurrentImage, 
        setCurrentDesccription, 
        setCurrentPrice, 
        setCurrentPreDetails, 
        setCurrentAfterDetails} = useContext(DataContext);

    const navigate = useNavigate();    
    
    const navigateTo = () => {
        setCurrentImage(image);
        setCurrentDesccription(description);
        setCurrentPrice(price);
        setCurrentPreDetails("Life without technology is next to impossible since humans have become dependent");
        setCurrentAfterDetails("on technological advancements. For every human activity, we need a machine, and then there comes technology. It has made all our lives easier and more convenient and has also made transportation, education, labour, etc., more accessible.");
        navigate('../motech/item-page');
    }

    return (
        <li className="productCard" key={id}>
            <div className='productCard' onClick={navigateTo}>
                <img src={image}></img>
                <div className='productCardInfo'>
                    <p>{description}</p>
                    <div>
                        <h3>{price}</h3>
                        <span className="material-symbols-outlined">
                            add_shopping_cart
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default Card2;