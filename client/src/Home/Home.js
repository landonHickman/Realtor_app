import React from 'react'

const Home = (props) => {
  const {address, city, image, id} = props

  return(
    <div style={{textAlign: 'center'}}>
      <h3>{address}, {city}</h3>
      <img src={`${image}`} alt={`${id}`} style={{height: '300px'}}/>
    </div>
  )
}

export default Home