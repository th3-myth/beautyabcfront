import React from 'react'; 
import './image2.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import bg1 from '../Jewellery/1.jpg'
import bg2 from '../Jewellery/2.jpg'
import bg3 from '../Jewellery/3.jpg'
import bg4 from '../Jewellery/4.jpg'
import bg5 from '../Jewellery/5.jpg'
import bg6 from '../Jewellery/6.jpg'
import bg7 from '../Jewellery/7.jpg'
import bg8 from '../Jewellery/8.jpg'
import bg9 from '../Jewellery/9.jpg'
import bg10 from '../Jewellery/10.jpg'
import bg11 from '../Jewellery/11.jpg'
import bg12 from '../Jewellery/12.jpg'
import bg13 from '../Jewellery/13.jpg'
import bg14 from '../Jewellery/14.jpg'

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
