import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Realtor from './Realtor'
import RealtorForm from './RealtorForm'

const Realtors = () => {
  const [realtors, setRealtors] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getRealtors()
  },[])

  const getRealtors = async () => {
    try{
      let res = await axios.get(`/api/realtors`)
      setRealtors(res.data)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }
  
  const addRealtor = (real) => {
    let updatedRealtor = [real, ...realtors]
    setRealtors(updatedRealtor)
  }

  const editRealtor = (real) => {
    let updatedRealtor = realtors.map (r => r.id === real.id ? real : r)
    setRealtors(updatedRealtor)
  }

  const DeleteRealtor = async (id) => {
    await axios.delete(`/api/realtors/${id}`)
    let del = realtors.filter (real => real.id !== id)
    setRealtors(del)
  }

  const renderRealtors = () => {
    return realtors.map( real => {
      return <Realtor key={real.id} {...real} DeleteRealtor={DeleteRealtor} editRealtor={editRealtor}/>
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <h1>Realtors</h1>
      <button onClick={()=>setShowForm(!showForm)}>Add Realtor</button>
      {showForm && <RealtorForm addRealtor={addRealtor}/>}
      {renderRealtors()}
    </div>
  )
}

export default Realtors