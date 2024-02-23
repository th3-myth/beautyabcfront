import React from 'react'; 
import './image2.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import bg1 from '../Makeover/1.jpg'
import bg2 from '../Makeover/2.jpg'
import bg3 from '../Makeover/3.jpg'
import bg4 from '../Makeover/4.jpg'
import bg5 from '../Makeover/5.jpg'
import bg6 from '../Makeover/6.jpg'
import bg7 from '../Makeover/7.jpg'
import bg8 from '../Makeover/8.jpg'
import bg9 from '../Makeover/9.jpg'
import bg10 from '../Makeover/10.jpg'
import bg11 from '../Makeover/11.jpg'
import bg12 from '../Makeover/12.jpg'
import bg13 from '../Makeover/13.jpg'
import bg14 from '../Makeover/14.jpg'

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
	</Carousel> 
	</div> 
); 
}
