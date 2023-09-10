import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './App_components/Nav'
import Home from './App_components/pages/Home';
import Products from './App_components/pages/Products';
import Services from './App_components/pages/Services';
import Footer from './App_components/Footer';
import SignUp from './App_components/pages/SignUp';
import { DataProvidor } from './DataContext';
import ItemPage from './App_components/pages/ItemPage';

function App() {

  const footerRef = useRef();
  const sendTextRef = useRef();

  return (  
    <>
    <DataProvidor>
      <div className='App'>
        <Nav />

        <div className='routeDiv'>
          <Routes className="route">
                <Route path='motech/' element={<Home />} />

                <Route path='motech/products' element={<Products />} />
                
                <Route path='motech/services' element={<Services footerRef={footerRef} sendTextRef={sendTextRef}/>} />
                
                <Route path='motech/sign-up' element={<SignUp />} />

                <Route path='motech/item-page' element={<ItemPage />} />
          </Routes>
        </div>

        <Footer myRef={footerRef} sendTextRef={sendTextRef} />
      </div>
    </DataProvidor>
    </>
    
  );
};

export default App;
