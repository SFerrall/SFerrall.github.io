import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import SimpleReactLightbox from 'simple-react-lightbox'
import "lightgallery.js/dist/css/lightgallery.css"
import {LightgalleryProvider} from "react-lightgallery"
import CraftingPage from './crafting';
import AssetsPage from './gameAssets';
import WikiPage from './wiki';
import ProjectsPage from './projects';
import ContactPage from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LightgalleryProvider>
    <BrowserRouter>
      
        <Routes>
          
            <Route exact path='/' element={<App />} />
            <Route path='/crafting' element={<CraftingPage />} />
            <Route path='/assets' element={<AssetsPage />} />
            <Route path='/wiki' element={<WikiPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
        
        </Routes>
      
      
      </BrowserRouter>
  </LightgalleryProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
