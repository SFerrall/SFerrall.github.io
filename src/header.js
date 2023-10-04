import { Link } from 'react-router-dom';
import './App.css';
import { LightgalleryItem } from 'react-lightgallery';

function PageHeader(){

    return(
        <div>
            <header className='myHeader'>
                
                <div>
                    <h2><strong>Stefan Ferrall</strong></h2>
                    <p >Game Design</p>
                    
                </div>
                
                
            </header>
             
                <nav className='navbar'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/crafting">Design</Link>
                    <Link className='link' to="/assets">Art</Link>
                    <Link className='link' to="/wiki">Wiki</Link>
                    <Link className='link' to="/projects">Projects</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </nav>
            
        </div>
        

    )
} 

export default PageHeader;