import './App.css';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import resume from './img/resume_img.png';

function ContactPage(){

    return(
        <div className='wrapper'>
            <PageHeader />
            <div className='page'>
                Contact Information:<br></br>
                Email: sferrall@gmail.com<br></br>
                LinkedIn: www.linkedin.com/in/stefan-ferrall<br></br>
                Discord: Stef#2192<br></br>
                Github: https://github.com/SFerrall<br></br>

        
            </div>
            <figure>
                <img src={resume} alt='Resume' className='image'></img>
                <figcaption>Resume</figcaption>
            </figure>
           
        </div>
        

    )
} 

export default ContactPage;