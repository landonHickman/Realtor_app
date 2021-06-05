import axios from 'axios'
import React, {useState} from 'react'

const HomeForm = (props) => {
  const {id, addHome, editHome} = props
  const [address, setAddress] = useState(props.address ? props.address : '')
  const [city, setCity] = useState(props.city ? props.city : '')
  const [image, setImage] = useState(props.image ? props.image : '')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      if(id){
        let res = await axios.put(`/api/homes/${id}`, {address, city, image})
        console.log(res.data)
        editHome(res.data)
      }else {
        let res = await axios.post(`/api/homes`, {address, city, image})
        console.log(res.data)
        addHome(res.data)
      }
    }catch(err) {
      alert('err')
      console.log(err)
    }
    setAddress('')
    setCity('')
    setImage('')
  }

  return(
    <div style={{textAlign: 'center'}}>
     <form onSubmit={handleSubmit}>
      <h3>Address</h3>
      <input value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <h3>City</h3>
      <input value={city} onChange={(e)=>setCity(e.target.value)}/>
      <h3>Image</h3>
      <textarea style={{width: '500px', height: '100px'}} value={image} onChange={(e)=>setImage(e.target.value)}/>
      <br />
      <button>{id ? 'Edit' : 'Add'}</button>
     </form>
    </div>
  )
}

export default HomeForm