import './App.css';
import PageHeader from './header';
import { LightgalleryItem } from 'react-lightgallery';
import pyroxene from './img/art/Pyroxy_Diopside.png';
import bronzite from './img/art/bronzite_crystal.png';
import dolostone from './img/art/dolostone.png';
import rhodonite from './img/art/crystal_rhodonite.png';
import nickel from './img/art/nickel_ore.png';
import zinc from './img/art/zinc_ore.png';
import magnesium from './img/art/Magnesium_Ore.png';
import diopside from './img/art/Diopside_pyroxy_nb.png';
import meteorite from './img/art/Meteorite_I.png';
import opal from './img/art/Opal.png';
import peridot from './img/art/Peritot.png';
import vermiculite from './img/art/vermiculite.png';
import jade from './img/art/polished_jade.png';
import enstatite from './img/art/pyroxene_Enstatite.png';
import aegirine from './img/art/pyroxene_Aegerine.png';
import kosmo from './img/art/kosmochlor_pyroxene.png';
import graphite from './img/art/graphite.png';
import olivine from './img/art/Olivine.png';
import dolomite from './img/art/Dolomite.png';
import hyper from './img/art/hypersthene_pyroxene.png';
import bench_grinder from './img/art/items/Bench_Grinder.png';
import grinding_wheels from './img/art/items/grinding_wheels.png';
import spray from './img/art/items/SprayNozzle.png';
import rivets from './img/art/items/SSRivets.png';
import retort from './img/art/items/RetortDistiller.png';
import nitric from './img/art/items/NitricAcid.png';
import sulfuric from './img/art/items/SulfuricAcid.png';
import grow_lights from './img/art/items/Grow_Lights.png';
import sweet_potato from './img/art/items/SweetPotato.png';
import soy from './img/art/items/SoyBeans.png';
import basil from './img/art/items/Basil.png';
import sprouts from './img/art/items/Sprouts.png';
import carrots from './img/art/items/ShreddedCarrots.png';
import lettuce from './img/art/items/ChoppedLettuce.png';
import salad from './img/art/items/SideSalad.png';
import sunflower from './img/art/items/SunflowerSalad.png';
import knife from './img/art/items/ChefKnife.png';
import bamboo from './img/art/items/BambooBoard.png';
import iron_pan from './img/art/items/cast_iron_frying_pan.png';
import baking_pan from './img/art/items/baking_pan.png';

function AssetsPage(){

    return(
        <div className='wrapper'>
            <PageHeader />
            <div className='page'>
            <h3>Generative A.I. Art and Game Assets</h3>
            <div className='grid'>
                <figure>
                    <img src={pyroxene} className='image' alt='Pyroxene'></img>
                    <figcaption>Pyroxene</figcaption>
                </figure>
                <figure>
                    <img src={bronzite} className='image' alt='Pyroxene'></img>
                    <figcaption>Bronzite</figcaption>
                </figure>
                <figure>
                    <img src={dolostone} className='image' alt='Dolostone'></img>
                    <figcaption>Dolostone</figcaption>
                </figure>
                <figure>
                    <img src={rhodonite} className='image' alt='Rhodonite'></img>
                    <figcaption>Rhodonite</figcaption>
                </figure>
                <figure>
                    <img src={nickel} className='image' alt='Nickel Ore'></img>
                    <figcaption>Nickel</figcaption>
                </figure>
                <figure>
                    <img src={zinc} className='image' alt='Zinc Ore'></img>
                    <figcaption>Zinc</figcaption>
                </figure>
                <figure>
                    <img src={magnesium} className='image' alt='Magnesium Ore'></img>
                    <figcaption>Magnesium</figcaption>
                </figure>
                <figure>
                    <img src={diopside} className='image' alt='Diopside'></img>
                    <figcaption>Diopside</figcaption>
                </figure>
                <figure>
                    <img src={meteorite} className='image' alt='Meteorite'></img>
                    <figcaption>Meteorite</figcaption>
                </figure>
                <figure>
                    <img src={opal} className='image' alt='Opal'></img>
                    <figcaption>Opal</figcaption>
                </figure>
                <figure>
                    <img src={peridot} className='image' alt='Peridot'></img>
                    <figcaption>Peridot</figcaption>
                </figure>
                <figure>
                    <img src={vermiculite} className='image' alt='Vermiculite'></img>
                    <figcaption>Vermiculite</figcaption>
                </figure>
                <figure>
                    <img src={jade} className='image' alt='Jade'></img>
                    <figcaption>Jade</figcaption>
                </figure>
                <figure>
                    <img src={enstatite} className='image' alt='Enstatite'></img>
                    <figcaption>Enstatite</figcaption>
                </figure>
                <figure>
                    <img src={aegirine} className='image' alt='Aegirine'></img>
                    <figcaption>Aegirine</figcaption>
                </figure>
                <figure>
                    <img src={kosmo} className='image' alt='Kosmochlor'></img>
                    <figcaption>Kosmochlor</figcaption>
                </figure>
                <figure>
                    <img src={graphite} className='image' alt='Graphite'></img>
                    <figcaption>Graphite</figcaption>
                </figure>
                <figure>
                    <img src={olivine} className='image' alt='Olivine'></img>
                    <figcaption>Olivine</figcaption>
                </figure>
                <figure>
                    <img src={dolomite} className='image' alt='Dolomite'></img>
                    <figcaption>Dolomite</figcaption>
                </figure>
                <figure>
                    <img src={hyper} className='image' alt='Hypersthene'></img>
                    <figcaption>Hypersthene</figcaption>
                </figure>
                

            </div>

            <div className='grid'>
                <figure>
                    <img src={bench_grinder} className='image' alt='Bench Grinder'></img>
                    <figcaption>Bench Grinder</figcaption>
                </figure>
                <figure>
                    <img src={grinding_wheels} className='image' alt='Grinding Wheel'></img>
                    <figcaption>Grinding Wheel</figcaption>
                </figure>
                <figure>
                    <img src={spray} className='image' alt='Spray Nozzle'></img>
                    <figcaption>Spray Tower</figcaption>
                </figure>
                <figure>
                    <img src={rivets} className='image' alt='Rivets'></img>
                    <figcaption>Rivets</figcaption>
                </figure>
                <figure>
                    <img src={retort} className='image' alt='Retort Distiller'></img>
                    <figcaption>Retort Distiller</figcaption>
                </figure>
                <figure>
                    <img src={nitric} className='image' alt='Nitric Acid'></img>
                    <figcaption>Nitric Acid</figcaption>
                </figure>
                <figure>
                    <img src={sulfuric} className='image' alt='Sulfuric Acid'></img>
                    <figcaption>Sulfuric Acid</figcaption>
                </figure>
                <figure>
                    <img src={grow_lights} className='image' alt='Grow Light'></img>
                    <figcaption>Grow Light</figcaption>
                </figure>
            </div>
            <div className='grid'>
                <figure>
                    <img src={knife} className='image' alt='Chef Knife'></img>
                    <figcaption>Chef Knife</figcaption>
                </figure>
                <figure>
                    <img src={bamboo} className='image' alt='Cutting Board'></img>
                    <figcaption>Cutting Board</figcaption>
                </figure>
                <figure>
                    <img src={iron_pan} className='image' alt='Frying Pan'></img>
                    <figcaption>Frying Pan</figcaption>
                </figure>
                <figure>
                    <img src={baking_pan} className='image' alt='Baking Pan'></img>
                    <figcaption>Baking Pan</figcaption>
                </figure>
                <figure>
                    <img src={sweet_potato} className='image' alt='Sweet Potato'></img>
                    <figcaption>Sweet Potatoes</figcaption>
                </figure>
                <figure>
                    <img src={soy} className='image' alt='Soybeans'></img>
                    <figcaption>Soybeans</figcaption>
                </figure>
                <figure>
                    <img src={basil} className='image' alt='Basil'></img>
                    <figcaption>Basil</figcaption>
                </figure>
                <figure>
                    <img src={sprouts} className='image' alt='Sprouts'></img>
                    <figcaption>Sprouts</figcaption>
                </figure>
                <figure>
                    <img src={carrots} className='image' alt='Carrots'></img>
                    <figcaption>Sliced Carrots</figcaption>
                </figure>
                <figure>
                    <img src={lettuce} className='image' alt='Chopped Lettuce'></img>
                    <figcaption>Chopped Lettuce</figcaption>
                </figure>
                <figure>
                    <img src={salad} className='image' alt='Side Salad'></img>
                    <figcaption>Side Salad</figcaption>
                </figure>
                <figure>
                    <img src={sunflower} className='image' alt='Sunflower Salad'></img>
                    <figcaption>Sunflower Salad</figcaption>
                </figure>

            </div>
            </div>
        </div>
        

    )
} 

export default AssetsPage;