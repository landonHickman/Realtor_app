import React from 'react'

const Realtor = (props) => {
  const {name, license, rating, id, DeleteRealtor} = props
  return (
    <div >
      <h2>{name}</h2>
      <h4>{license ? 'Licensed Realtor' : 'Unlicensed Realtor'}</h4>
      <h3>Rating:</h3>
      <h4>{rating}</h4>
      <button onClick={()=>DeleteRealtor(id)}>Delete</button>
    </div>
  )
}
export default Realtor