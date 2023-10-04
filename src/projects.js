import './App.css';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import place_invader_start from './img/place_invader_start.png';
import place_invader_lvl_1 from './img/place_invader_lvl_1.png';
import sector_eternal_start from './img/sector_eternal_start.png';
import sector_eternal_lvl1 from './img/sector_eternal_lvl1.png';
import eternal_universe_login from './img/eternal_universe_login.png';
import eternal_universe_arcade from './img/eternal_universe_arcade.png';
import eternal_universe_minesweeper from './img/eternal_universe_minesweeper.png';




function ProjectsPage(){

    return(
        <div className='wrapper'>
            <PageHeader />
            <div className='page'>
            <figure>
                <img src={eternal_universe_login}className='image' alt='Eternal Universe Login Page'></img>
                <img src={eternal_universe_arcade}className='image' alt='Eternal Universe Login Page'></img>
                <img src={eternal_universe_minesweeper}className='image' alt='Eternal Universe Login Page'></img>
            </figure>
                
            <figure>
                <img src={place_invader_start}className='image' alt='Eternal Universe Login Page'></img>
                <img src={place_invader_lvl_1}className='image' alt='Eternal Universe Login Page'></img>
            </figure>

            <figure>
                <img src={sector_eternal_start}className='image' alt='Eternal Universe Login Page'></img>
                <img src={sector_eternal_lvl1}className='image' alt='Eternal Universe Login Page'></img>
            </figure>
        
            </div>
        </div>
        

    )
} 

export default ProjectsPage;