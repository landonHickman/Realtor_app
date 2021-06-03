import React,{useEffect, useState} from 'react'
import axios from 'axios'

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
  
  const renderRealtors = () => {
    return realtors.map( real => {
      return (
        <div key={real.id}>
          <h2>{real.name}</h2>
          <h4>{real.license ? 'Licensed Realtor' : 'Unlicensed Realtor'}</h4>
          <h3>Rating:</h3>
          <h4>{real.rating}</h4>
        </div>
      )
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