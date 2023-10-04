import './App.css';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import fandom_banner from './img/Fandom-2021.png';
import wiki_home_1 from './img/wiki_home_1.png';
import wiki_home_2 from './img/wiki_home_2.png';
import wiki_home_3 from './img/wiki_home_3.png';
import wiki_home_4 from './img/wiki_home_4.png';
import wiki_home_5 from './img/wiki_home_5.png';
import wiki_buildings_nav from './img/wiki_buildings_nav.png';
import wiki_building_upgrade from './img/wiki_building_upgrade.png';
import wiki_power_page from './img/wiki_power_page.png';
import wiki_greenhouse_1 from './img/wiki_greenhouse_1.png';
import wiki_greenhouse_2 from './img/wiki_greenhouse_2.png';
import wiki_greenhouse_3 from './img/wiki_greenhouse_3.png';


function WikiPage(){

    return(
        <div className='wrapper'>
            <PageHeader />
            <div className='page'>
                <div style={{backgroundColor: "#1B1D21"}}>
                    <figure>
                        <img src={fandom_banner} className="image" alt="Fandom Wiki"></img>
                        Wiki Design
                    </figure>
                </div>
           
            Over 2,500 edits building and maintaining the Wikipedia for the Web3 game Million on Mars found on the WAX, Solona and Polygon blockchain networks.
            Home Page
            
        
            </div>
            <div>
                <LightgalleryItem>
                    <figure>
                    <img src={wiki_home_1} className="image" alt="Fandom Wiki"></img>
                    <figcaption>Wiki Home Page</figcaption>
                    </figure>
                </LightgalleryItem>
            
            <img src={wiki_home_2} className="image" alt="Fandom Wiki"></img>
            
            <img src={wiki_home_3} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_home_4} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_home_5} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_buildings_nav} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_building_upgrade} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_power_page} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_greenhouse_1} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_greenhouse_2} className="image" alt="Fandom Wiki"></img>
            <img src={wiki_greenhouse_3} className="image" alt="Fandom Wiki"></img>
            </div>
            
        </div>
        

    )
} 

export default WikiPage;