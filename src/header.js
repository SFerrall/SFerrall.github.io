import { Link } from 'react-router-dom';
import './App.css';
import { LightgalleryItem } from 'react-lightgallery';

function PageHeader(){

    return(
        <div>
            <header className='myHeader'>
                <h1>Stefan Ferrall</h1>
                <h3>Game Design</h3>
            </header>
             
                <nav className='navbar'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/crafting">Crafting Design</Link>
                    <Link className='link' to="/assets">Art & Assets</Link>
                    <Link className='link' to="/wiki">Wiki Design</Link>
                    <Link className='link' to="/projects">Projects</Link>
                </nav>
            
        </div>
        

    )
} 

export default PageHeader;