import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvidor = ({ children }) => {
    
    const [isFooter, setIsFooter] = useState(true);
    const [currentPath, setCurrentPath] = useState("App.js");
    const [currentIImage, setCurrentImage] = useState(null);
    const [currentDescription, setCurrentDesccription] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
    const [currentPreDetails, setCurrentPreDetails] = useState("");
    const [currentAfterDetails, setCurrentAfterDetails] = useState("");

   
    return (
        <DataContext.Provider value={{
            isFooter, setIsFooter, 
            currentPath, setCurrentPath, 
            currentIImage, setCurrentImage,
            currentDescription, setCurrentDesccription,
            currentPrice, setCurrentPrice,
            currentPreDetails, setCurrentPreDetails,
            currentAfterDetails ,setCurrentAfterDetails,
        }}>
            {children}
        </DataContext.Provider>
    )
};