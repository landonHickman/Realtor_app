import React, {useState} from 'react'
import HomeForm from './HomeForm'

const Home = (props) => {
  const {address, city, image, id, editHome, deleteHome} = props
  const [showForm, setShowForm] = useState(false)

  return(
    <div style={{textAlign: 'center'}}>
      <h3>{address}, {city}</h3>
      <img src={`${image}`} alt={`${id}`} style={{height: '300px'}}/>
      <br />
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      <button onClick={()=>deleteHome(id)}>Delete</button>
      {showForm && <HomeForm {...props} editHome={editHome}/>}
    </div>
  )
}

export default Home