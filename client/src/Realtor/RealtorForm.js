import axios from 'axios'
import React, {useState} from 'react'

const RealtorForm = (props) => {
  const {id, addRealtor, editRealtor, setShowForm, showForm} = props
  const [name, setName] =useState(props.name ? props.name : '')
  const [license, setLicense] =useState(props.license ? props.license : '')
  const [rating, setRating] =useState(props.rating ? props.rating : '')
  const [checked, setChecked] =useState(props.license ? true : false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(id){
        let res = await axios.put(`/api/realtors/${id}`, {name, license, rating})
        editRealtor(res.data)
      } else {
        let res = await axios.post(`/api/realtors`, {name, license, rating})
        addRealtor(res.data)
      }
    } catch (err){
      alert('err check console')
      console.log(err)
    }
    setName('')
    setLicense('')
    setRating('')
    setChecked(!checked)
    setShowForm(!showForm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Licensed?</p>
      <input defaultChecked={checked} type="checkbox" onChange={(e)=>setLicense(e.target.checked)}/>
      <p>Rating</p>
      <input value={rating} onChange={(e)=>setRating(e.target.value)}/>
      <p></p>
      <br/>
      <button>{id ? 'Edit' : 'Add' }</button>
      </form>
    </div>
  )
}

export default RealtorForm