import React, {useState} from 'react'
import RealtorForm from './RealtorForm'

const Realtor = (props) => {
  const {name, license, rating, id, DeleteRealtor, editRealtor} = props
  const [showForm, setShowForm] = useState(false)
  return (
    <div >
      <h2>{name}</h2>
      <h4>{license ? 'Licensed Realtor' : 'Unlicensed Realtor'}</h4>
      <h3>Rating:</h3>
      <h4>{rating}</h4>
      <button onClick={()=>setShowForm(!showForm)}>Edit Realtor</button>
      <button onClick={()=>DeleteRealtor(id)}>Delete</button>
      {showForm && <RealtorForm id={id} name={name} license={license} rating={rating} editRealtor={editRealtor} setShowForm={setShowForm} showForm={showForm}/>}
    </div>
  )
}
export default Realtor