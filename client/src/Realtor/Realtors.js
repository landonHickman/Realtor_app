import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Realtor from './Realtor'

const Realtors = () => {
  const [realtors, setRealtors] = useState([])

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
  
  const DeleteRealtor = async (id) => {
    await axios.delete(`/api/realtors/${id}`)
    let del = realtors.filter (real => real.id !== id)
    setRealtors(del)
  }

  const renderRealtors = () => {
    return realtors.map( real => {
      return <Realtor key={real.id} {...real} DeleteRealtor={DeleteRealtor}/>
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <h1>Realtors</h1>
      {renderRealtors()}
    </div>
  )
}

export default Realtors