import React, { useEffect, useState } from 'react'
import Sresult from './Sresult'

const Search = () => {
 const [Img, setImg]  = useState()



 const inputEvent = (event) => {
    const data = event.target.value
    console.log(data ,"gjgfs");
    setImg(data)
 }

 
 

  return (
    <>
     <div className='searchbar'>
        <input type={"text"}
    
         placeholder={"Search Anything"} 
         value={Img}
         onChange={inputEvent}/>
           
         {/* <button className='btn' value={Img}  onChange>Next</button> */}

         <Sresult name={Img} />
     </div>

    </>
  )
}

export default Search
