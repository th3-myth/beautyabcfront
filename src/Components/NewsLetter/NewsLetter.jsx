import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Enter Your Query !</h1>
      <div>
        <input type="number" placeholder='Your mobile number' className='number'/>
        </div>
        <div>
        <input type="email" placeholder='Your email id' className='email'/>
        </div>
        <div>
        <input type="text" placeholder='Your query' className='text'/>
        </div>
        <div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default NewsLetter
