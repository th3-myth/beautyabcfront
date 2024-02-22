import React from 'react'; 
import './image2.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import bg1 from '../Media/1.jpg'
import bg3 from '../Media/3.jpg'
import bg4 from '../Media/4.jpg'
import bg5 from '../Media/5.jpg'
import bg6 from '../Media/6.jpg'
import bg7 from '../Media/7.jpg'
import bg8 from '../Media/8.jpg'
import bg9 from '../Media/9.jpg'
import bg10 from '../Media/10.jpg'
import bg11 from '../Media/11.jpg'
import bg12 from '../Media/12.jpg'
import bg13 from '../Media/13.jpg'
import bg14 from '../Media/14.jpg'

export default function App() { 
return ( 
	<div className='Wallm' style={{ display: 'block', padding: 30 }}> 
	<Carousel> 
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" src={bg1} alt="One" /> 
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
