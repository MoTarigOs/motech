import './ItemPage.css'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../DataContext';

const ItemPage = () => {

    const { 
        currentIImage, 
        currentDescription, 
        currentPrice, 
        currentPreDetails, 
        currentAfterDetails,
        setIsFooter } = useContext(DataContext);

    const [seeMore, setSeeMore] = useState(false);
    const { setCurrentPath, currentPath } = useContext(DataContext);

    const navigate = useNavigate();    

    useEffect(() => {
        if(currentPath === "itemPage"){
            navigate("/");
        } else {
            
        }
    }, [currentPath])

    setCurrentPath("ItemPage");

    setIsFooter(false);



    return(
        
        <div className='Wrapper'>
            <div className='ItemPage'>

                {currentDescription && currentIImage && currentPrice &&
                    <>
                        <div className='ItemImageDiv'><img className='ItemPageImage' src={currentIImage}/></div>
                        
                        <div className='ItemInfoDiv'>
                            <p className='desc'>{currentDescription}</p>

                            <h2>{currentPrice}</h2>

                            <p className='details'>{currentPreDetails}
                                {(seeMore === false) && <span onClick={() => setSeeMore(true)}> see more...</span>} 
                                {(seeMore === true) ? " "+currentAfterDetails : ""}
                                {(seeMore === true) && <span onClick={() => setSeeMore(false)}> see less</span>} 
                            </p>
                        </div>
                    </>
                }

                {(!currentDescription || !currentIImage || !currentPrice) &&
                    <>
                        <h1 style={{color: "red"}}>Nothing to display!</h1>
                    </>
                }
            </div>
        </div>
    )

};

export default ItemPage;