import React from 'react'



const Sresult = (props) => {


    const img = `https://source.unsplash.com/850x600/?${props.name}`
      // console.log(img);

  return (
    <>
      <div>
        <img src={img} alt={"search"}/>
        
      </div>
    </>
  )
}

export default Sresult
