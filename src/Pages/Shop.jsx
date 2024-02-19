import React, { useEffect, useState } from 'react'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Slide from '../Components/Slider/Slide'
const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('https://beautyadorebycharu.onrender.com/popularinhair') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('https://beautyadorebycharu.onrender.com/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Slide/>
      <NewsLetter/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
    </div>
  )
}

export default Shop
