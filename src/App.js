import logo from './logo.svg';
import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import mom_banner from './img/mom_banner.png';
import fandom_banner from './img/Fandom-2021.png';
import scenario_logo from './img/scenario_logo.jpg';
import godot_banner from './img/godot_banner.png';
import gmail_banner from './img/gmail_banner.jpg';
import linkedin_banner from './img/linkedin_banner.png';
import react_banner from './img/react_banner.jpeg';
import unreal_banner from './img/unreal-engine.png';
import unity_banner from './img/unity-banner.jpg';

import place_invader_start from './img/place_invader_start.png';
import place_invader_lvl_1 from './img/place_invader_lvl_1.png';
import sector_eternal_start from './img/sector_eternal_start.png';
import sector_eternal_lvl1 from './img/sector_eternal_lvl1.png';
import eternal_universe_login from './img/eternal_universe_login.png';
import eternal_universe_arcade from './img/eternal_universe_arcade.png';
import eternal_universe_minesweeper from './img/eternal_universe_minesweeper.png';


function App() {
  const navigate = useNavigate();
  const onMomBannerClick = () => {
    navigate('/crafting')
  }
  const onWikiBannerClick = () => {
    navigate('wiki')
  }
  const onAssetsBannerClick = () => {
    navigate('assets')
  }
  return (
    <div className='wrapper'>
      <PageHeader />
      <div className='page'>
        Welcome to my Portfolio!<br></br><br></br>
        For me, few things in life are as humbling and awe-inspiring as game design and all that it entails. The combination of passion, logic, psychology, art, music, story-telling and social aspects make it one of the highest forms of modern art. As a gamer myself for over 30 years, I am extremely passionate in my quest to be a part of something bigger, something to touch lives and create lasting memories.
        <br></br> 
        <br></br> 
        As a full-stack developer whose main strength is game and systems design, this portfolio site is here to showcase my work for professional projects both in production as well as in the concept stages.  
        <div className='homeGrid'>
          <h2>Professional Portfolio</h2>
          <figure>
            <img src={mom_banner} className="image" alt="Million on Mars" onClick={onMomBannerClick}></img>
            <figcaption><strong>Balanced Web3 Crafting Chains</strong></figcaption>
          </figure>
          <ul>
            <li>Over 50 new recipes delivering value and stimulating in-game economic activity in the Web3 game Million on Mars on the Wax, Solona and Polygon blockchain networks</li>
          </ul>
          
          <div style={{backgroundColor: "#1B1D21"}}>
          <figure>
            <img src={fandom_banner} className="image" alt="Fandom Wiki"onClick={onWikiBannerClick}></img>
            <strong>Wiki Design</strong>
          </figure>
          </div>
          
          
          <div>Over 2,500 edits to construct the Million on Mars wiki including all templating and overall site layout designs</div>
          <figure>
            
          <img src={scenario_logo} className="image" alt="Scenario A.I."onClick={onAssetsBannerClick}></img>
         
          
          <figcaption><strong>A.I. Game Assets</strong></figcaption>
          </figure>
          
          <div>Text to Image and Image to Image A.I. trained art and game asset generation using Scenario A.I. tools</div>
          <div style={{backgroundColor: "white"}}>
          <figure>
          <img src={godot_banner} className="homeImage" alt="Godot Game Engine"></img>
          <img src={unreal_banner} className="homeImage" alt="Godot Game Engine"></img>
          <img src={react_banner} className="homeImage" alt="Godot Game Engine"></img>
          <img src={unity_banner} className="homeImage" alt="Godot Game Engine"></img>
          <figcaption><strong>Game Engines</strong></figcaption>
          </figure>
          </div>
          
          

          <figure>
          <img src={eternal_universe_minesweeper} className="homeImage" alt="Godot Game Engine"></img>
          <img src={sector_eternal_lvl1} className="homeImage" alt="Godot Game Engine"></img>
          
          <img src={place_invader_lvl_1} className="homeImage" alt="Godot Game Engine"></img>
          
          <img src={eternal_universe_login} className="homeImage" alt="Godot Game Engine"></img>
          
          <figcaption><strong>Personal Projects</strong></figcaption>
          </figure>

          <figure>
          <img src={linkedin_banner} className="image" alt="Linked in"></img>
          <figcaption>Linked in</figcaption>
          </figure>
          
          
          <figure>
          <img src={gmail_banner} className="image" alt="Gmail"></img>
          
          <figcaption><strong>Contact</strong></figcaption>
          </figure>
                    

          
        </div>
        
      </div>
      
      
        
        
    </div>
  );
}

export default App;
