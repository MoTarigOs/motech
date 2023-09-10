import Button from '../../components/Button';
import './Services.css';
import image1 from '../../Assets/images/laptop.jpg';
import image2 from '../../Assets/images/laptop.jpg';
import image3 from '../../Assets/images/laptop.jpg';
import image4 from '../../Assets/images/laptop.jpg';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../DataContext';
import Card2 from '../../components/Card2';

const Services = ({ footerRef, sendTextRef }) => {

    const { setIsFooter } = useContext(DataContext);
    const { setCurrentPath } = useContext(DataContext);

    setCurrentPath("Services");

    setIsFooter(true);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
            window.scrollTo({
                top: 64,
                behavior: 'instant'
            })
        
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500)
    }, [])

    /* close this db, it meant to simulate database */
    const db = ([{
        image: image1,
        description: "We offer you design and development services",
        price: "$1000",
        id: 1
    },
    {
        image: image2,
        description: "We offer you design and development services",
        price: "$1000",
        id: 2
    },
    {
        image: image3,
        description: "We offer you design and development services",
        price: "$1000",
        id: 3
    },
    {
        image: image4,
        description: "We offer you design and development services",
        price: "$1000",
        id: 4
    },
    {
        image: image1,
        description: "We offer you design and development services",
        price: "$1000",
        id: 1
    },
    {
        image: image2,
        description: "We offer you design and development services",
        price: "$1000",
        id: 2
    },
    {
        image: image3,
        description: "We offer you design and development services",
        price: "$1000",
        id: 3
    },
    {
        image: image4,
        description: "We offer you design and development services",
        price: "$1000",
        id: 4
    }]);

    const scrollToBottom = () => {
        window.scrollTo({
            top: footerRef.current.offsetTop,
            behavior: 'smooth'
        })
        setTimeout(() => {
            sendTextRef.current.focus();
        }, 500)
    };

    return (
        <div className={`Services`}>
            <div className={`landingProductPage ${isAnimating ? "renderAnimation" : null}`}>
                <h1>Services</h1>
                <p>We offer you design and development services
                     for websites and applications, using the 
                     power of artificial intelligence.</p>

                <Button 
                    link={""}
                    name={"Contact Us"}
                    buttonStyle={"outlineBtn"}
                    buttonSize={"largeSizeBtn"}
                    onClick={scrollToBottom}
                />     
            </div>

            <div className='ProductsContent'>
                <ul>
                    {db.map((item) => (
                        <Card2 id={item.id} image={item.image} description={item.description} price={item.price}/>
                    ))}
                </ul>
            </div>
            
        </div>
    )
};

export default Services;