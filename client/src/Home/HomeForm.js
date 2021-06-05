import axios from 'axios'
import React, {useState} from 'react'

const HomeForm = (props) => {
  const {id, addHome} = props
  const [address, setAddress] = useState(props.address ? props.address : '')
  const [city, setCity] = useState(props.city ? props.city : '')
  const [image, setImage] = useState(props.image ? props.image : '')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      let res = await axios.post(`/api/homes`, {address, city, image})
      console.log(res.data)
      addHome(res.data)
    }catch(err) {
      alert('err')
      console.log(err)
    }
  }

  return(
    <div style={{textAlign: 'center'}}>
     <form onSubmit={handleSubmit}>
      <h3>Address</h3>
      <input onChange={(e)=>setAddress(e.target.value)}/>
      <h3>City</h3>
      <input onChange={(e)=>setCity(e.target.value)}/>
      <h3>Image</h3>
      <input onChange={(e)=>setImage(e.target.value)}/>
      <p>https://cdn.vox-cdn.com/thumbor/eFEHo8eygHajtwShwT9e_jf7c-c=/0x0:1920x1080/1200x800/filters:focal(722x227:1028x533)/cdn.vox-cdn.com/uploads/chorus_image/image/69323002/Screen_Shot_2021_05_21_at_9.54.00_AM.0.jpeg</p>
      <button>{id ? 'Edit' : 'Add'}</button>
     </form>
    </div>
  )
}

export default HomeForm