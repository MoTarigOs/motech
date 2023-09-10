import Button from '../../components/Button';
import './Products.css';
import image1 from '../../Assets/images/laptop.jpg';
import image2 from '../../Assets/images/laptop.jpg';
import image3 from '../../Assets/images/laptop.jpg';
import image4 from '../../Assets/images/laptop.jpg';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../DataContext';
import Card2 from '../../components/Card2';

const Products = () => {

    const { setIsFooter } = useContext(DataContext);
    const { setCurrentPath } = useContext(DataContext);
    const myRef = useRef();
    const [yOffset, setYOffset] = useState(0);

    setIsFooter(true);
    const [isAnimating, setIsAnimating] = useState(true);
    
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

    useEffect(() => {
        setCurrentPath("Products");
        
        window.scrollTo({
            top: 64,
            behavior: 'instant'
        })     

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500)

        setYOffset(myRef.current.offsetTop);
    }, [])

    const scrollToBottom = () => {
        window.scrollTo({
            top: yOffset,
            behavior: 'smooth'
        })
    };

    return (
        <div className='Products'>
            <div className={`landingProductPage ${isAnimating ? "renderAnimation" : null}`}>
                <h1>Products</h1>
                <p>We offer you design and development services
                     for websites and applications, using the 
                     power of artificial intelligence.</p>

                <Button 
                    link={""}
                    name={"Visit Our Store"}
                    buttonStyle={"outlineBtn"}
                    buttonSize={"largeSizeBtn"}
                    onClick={scrollToBottom}
                />     
            </div>

            <div className='ProductsContent' ref={myRef}>
                <ul>
                    {db.map((item) => (
                        <Card2 id={item.id} image={item.image} description={item.description} price={item.price}/>
                    ))}
                </ul>
            </div>
            
        </div>
    )
};

export default Products;