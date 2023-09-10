import './Home.css';
import '../../index.css';
import Button from '../../components/Button';
import backgroundVideo from '../../Assets/images/background_video2.mp4'
import Card from '../../components/Card';
import AI_image from '../../Assets/images/ai_generated.jpg'
import Drone_Image from '../../Assets/images/drone.jpg'
import laptop_Image from '../../Assets/images/laptop.jpg'
import VR_Image from '../../Assets/images/vr.jpg'
import Xbox_Image from '../../Assets/images/xbox.jpg'
import { useContext, useEffect, useState, useRef } from 'react';
import { DataContext } from '../../DataContext';

const Home = () => {

    const { setIsFooter, setCurrentPath } = useContext(DataContext);

    const ref = useRef(true); 

    setIsFooter(true);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {

        if(window.scrollY >= 0){
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
                
        setTimeout(() => {
            setIsAnimating(false);
            setIsAnimating(true);
        }, 500)

        setCurrentPath("Home");
    }, [])

    return (
        <div className='Home'>
                <video loop muted autoPlay>
                    <source src={backgroundVideo} type='video/mp4'/>
                </video>
            <div className={`landSection ${isAnimating ? "renderAnimation" : null}`}>

                <h1>TECHNOLOGY WIN</h1>
                <p>Let's use technology properly</p>
                <div className='landSectionButtons'>
                    <Button 
                        link={"./sign-up"}
                        name={"GET STARTED"}
                        buttonStyle={"outlineBtn"}
                        buttonSize={"largeSizeBtn"}
                    />
                    <Button 
                        link={"./services"}
                        name={"OUR SERVICES ☺"}
                        buttonStyle={"primaryBtn"}
                        buttonSize={"largeSizeBtn"}
                    />
                </div>
            </div>

            <div className='exploreSection'>
                <div className='div1'>
                    <Card 
                        image={AI_image}
                        description={"Explore artificial intelligence technologies"}
                        cardName={"Artificial Intelligence"}
                    />
                    <Card 
                        image={VR_Image}
                        description={"Equip the best tech devices out there"}
                        cardName={"Devices"}
                    />

                </div>
                <div className='div2'>
                    <Card 
                        image={laptop_Image}
                        description={"Work from any where with your laptop"}
                        cardName={"Online Work"}
                    />
                    <Card 
                        image={Drone_Image}
                        description={"Use the tech to take amazing pictures"}
                        cardName={"Photgraph"}
                    />
                    <Card 
                        image={Xbox_Image}
                        description={"Enjoy your weekend with incrediple games"}
                        cardName={"Games"}
                    />
                </div>
            </div>

        </div>

    )
};

export default Home;