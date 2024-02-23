import React from 'react'; 
import './image2.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import bg1 from '../Dresses/1.png'
import bg2 from '../Dresses/17.png'
import bg3 from '../Dresses/2.png'
import bg4 from '../Dresses/3.png'
import bg5 from '../Dresses/4.png'
import bg6 from '../Dresses/5.png'
import bg7 from '../Dresses/6.png'
import bg8 from '../Dresses/7.png'
import bg9 from '../Dresses/8.png'
import bg10 from '../Dresses/9.png'
import bg11 from '../Dresses/10.png'
import bg12 from '../Dresses/11.png'
import bg13 from '../Dresses/12.png'
import bg14 from '../Dresses/13.png'
import bg15 from '../Dresses/14.png'
import bg16 from '../Dresses/15.png'
import bg17 from '../Dresses/16.png'


export default function App() { 
return ( 
	<div className='Wallm' style={{ display: 'block', padding: 30 }}> 
	<Carousel> 
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg1} alt="One" /> 
		</Carousel.Item> 
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg2} alt="One" /> 
		</Carousel.Item> 
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg3} alt="Two"/> 
		</Carousel.Item> 
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg4} alt="Two"/> 
		</Carousel.Item> 
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg5} alt="Two"/> 
		</Carousel.Item> 
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg6} alt="Two"/> 
		</Carousel.Item> 
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg7} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg8} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg9} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg10} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg11} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg12} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg13} alt="Two"/> 
		</Carousel.Item>
        <Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg14} alt="Two"/> 
		</Carousel.Item>
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg15} alt="Two"/> 
		</Carousel.Item>
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg16} alt="Two"/> 
		</Carousel.Item>
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg17} alt="Two"/> 
		</Carousel.Item>
	</Carousel> 
	</div> 
); 
}
