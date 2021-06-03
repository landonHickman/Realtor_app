import axios from 'axios'
import React, {useState} from 'react'

const RealtorForm = (props) => {
  const {id, addRealtor} = props
  const [name, setName] =useState(props.name ? props.name : '')
  const [license, setLicense] =useState(props.license ? props.license : '')
  const [rating, setRating] =useState(props.rating ? props.rating : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(id){

      } else {
        let res = await axios.post(`/api/realtors`, {name, license, rating})
        addRealtor(res.data)
        console.log(res.data)
      }
    } catch (err){
      alert('err check console')
      console.log(err)
    }
    setName('')
    setLicense('')
    setRating('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Licensed?</p>
      <input value={license} type="checkbox" onChange={(e)=>setLicense(e.target.checked)}/>
      <p>Rating</p>
      <input value={rating} onChange={(e)=>setRating(e.target.value)}/>
      <p></p>
      <br/>
      <button>Edit/Add</button>
      </form>
    </div>
  )
}

export default RealtorForm