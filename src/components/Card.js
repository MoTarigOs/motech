import './Card.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const cardNames = ['Tech', 'Devices', 'Artificial Intelligence', 'Online Work', 'Photgraph', 'Games'];

const Card = ({image,description,cardName}) => {

    const { 
        setCurrentImage, 
        setCurrentDesccription, 
        setCurrentPrice, 
        setCurrentPreDetails, 
        setCurrentAfterDetails} = useContext(DataContext);

    const navigate = useNavigate();    

    const cardNameBackColor = () => {
        if(cardName === 'Tech')
            return "#f25eb0";
        if(cardName === 'Devices')
            return "#24babd";
        if(cardName === 'Artificial Intelligence')
            return "#ff00ff";
        if(cardName === 'Games')
            return "#03cc06";
        if(cardName === 'Online Work')
            return "#009cff"   
        if(cardName === 'Photograph')
            return "#009aac"    
    }

    const navigateTo = () => {
        setCurrentImage(image);
        setCurrentDesccription(description);
        setCurrentPrice("$1099 - $1299");
        setCurrentPreDetails("Life without technology is next to impossible since humans have become dependent");
        setCurrentAfterDetails("on technological advancements. For every human activity, we need a machine, and then there comes technology. It has made all our lives easier and more convenient and has also made transportation, education, labour, etc., more accessible.");
        navigate('item-page');
    }

    return (
        <>
            <div className='Card' onClick={navigateTo}>
                {image ? (
                    <img src={image} className='image'/>
                ) : (
                    <div className='image'>Image didn't load</div>
                )}
                <div className='descDiv'>
                    <p>{description}</p>
                    <h4 style={{background: cardNameBackColor()}}>
                    {cardNames.includes(cardName) ? cardName : cardNames[0]}</h4>
                </div>    
            </div>
        </>
    )
};

export default Card;
