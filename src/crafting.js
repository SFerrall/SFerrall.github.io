import './App.css';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import mom_banner from './img/mom_banner.png';
import ammonia1 from './img/Ammonia_I.png'
import sabatier from './img/Ammonia_Sabatier.png';
import ammonia1loot from './img/Ammonia_I_loot.png';
import ammonia2 from './img/Ammonia_II.png';
import ammonia2loot from './img/Ammonia_II_loot.png';
import ammonia3 from './img/Ammonia_III.png';
import ammonia3loot from './img/Ammonia_III_loot.png';
import nitricOxide from './img/Nitric_Oxide.png';
import nitricOxideloot from './img/Nitric_Oxide_loot.png';

import nitrous from './img/Nitrous_Oxide.png';
import nitricAcid from './img/Nitric_Acid.png';
import nitricAcidloot from './img/nitric_acid_loot.png';
import sulfuricAcid from './img/Sulfuric_Acid.png';
import sulfuricAcidloot from './img/Sulfuric_Acid_loot.png';
import anfo from './img/mix_anfo.png';
import ammoniumNitrate from './img/Ammonium_Nitrate.png';

function CraftingPage(){

    return(
        <div className='wrapper'>
            <PageHeader />
            <div className='page'>

            
                <h4>Complex Crafting and Economy Design</h4>
                <p>text</p>
                <p>text</p>
                <div className='homeGrid'>
                    <img src={mom_banner}className='homeImage' alt="Million on Mars Web3 Game"></img>
                    <h2>Balanced Crafting Chains and Content Design</h2>
                    
                    <ul style={{textAlign: 'justify', color: 'white'}}>
                        <li>Over 50 new recipes, items and quests added to the Web3 game Million on Mars on the WAX, Polygon and Solona networks delivering value to the player owned assets, driving sales for the team and stimulating economic activity in-game. </li>
                        <li>Programatically balanced recipe designs implemented with my own custom built analysis tools using Python, Pandas Dataframes and Google Sheets</li>
                        <li>Full cycle design from early concept through production and live-ops including release notes, items descriptions and post release community suppport</li>
                        <li>Methodoligies employed to create new in game resource sinks and giving new uses to over supplied items in game resulting in drastic changes to the in-game prices, global supply numbers and demand curves of a large number of affected resources </li>
                        <li>Far reaching content adding new tasks and interest to over half of the existing buildings in game spanning 6 different player professions and 80 expertise levels</li>
                        <li>Complex scientifically accurate chemical reactions chains and descriptions</li>
                        <li>Brand new mechanics for the Mining profession in game introducing new tools, resources and ways to process materials</li>
                        <li>Expansive loot table designs</li>
                        <li>Worked closely with the CEO Erick Bethke and the lead game designer Mitch Zamara, discussing game balance, content updates and the game's roadmap</li>

                    </ul>
                    
                </div>
                <div className="grid">
                    
                    <LightgalleryItem src={ammonia1}>
                        <figure>
                        <img src={ammonia1} className="image" alt="Sabatier Reactor Building"></img>
                        <figcaption>Ammonia I</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammonia1loot}>
                        <figure>
                        <img src={ammonia1loot} className="image" alt="Sabatier Reactor Building"></img>
                        <figcaption>Ammonia I Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammonia2}>
                        <figure>
                        <img src={ammonia2} className="image" alt="Sabatier Reactor Building"></img>
                        <figcaption>Ammonia II</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammonia2loot}>
                        <figure>
                        <img src={ammonia2loot} className="image" alt="Sabatier Reactor Building"></img>
                        <figcaption>Ammonia II Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammonia3}>
                        <figure>
                        <img src={ammonia3} className="image" alt="Sabatier Reactor Building"></img>
                        <figcaption>Ammonia III</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammonia3loot}>
                        <figure>
                            <img src={ammonia3loot} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Ammonia III Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={nitricOxide}>
                        <figure>
                            <img src={nitricOxide} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Nitric Oxide</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={nitricOxideloot}>
                        <figure>
                            <img src={nitricOxideloot} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Nitric Oxide Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={nitrous}>
                        <figure>
                            <img src={nitrous} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Nitrous Oxide</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={nitricAcid}>
                        <figure>
                            <img src={nitricAcid} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Nitric Acid</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={nitricAcidloot}>
                        <figure>
                            <img src={nitricAcidloot} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Nitric Acid Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={sulfuricAcid}>
                        <figure>
                            <img src={sulfuricAcid} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Sulfuric Acid</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={sulfuricAcidloot}>
                        <figure>
                            <img src={sulfuricAcidloot} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Sulfuric Acid Loot</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={ammoniumNitrate}>
                        <figure>
                            <img src={ammoniumNitrate} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>Ammonium Nitrate</figcaption>
                        </figure>
                    </LightgalleryItem>
                    <LightgalleryItem src={anfo}>
                        <figure>
                            <img src={anfo} className="image" alt="Sabatier Reactor Building"></img>
                            <figcaption>ANFO</figcaption>
                        </figure>
                    </LightgalleryItem>
            </div>
        
        
        </div>
    </div>
        
        

    )
} 

export default CraftingPage;