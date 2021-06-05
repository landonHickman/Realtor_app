import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Home from './Home'

const Homes = () => {
  const [homes, setHomes] = useState([])

  useEffect(()=>{
    getHomes()
  }, [])

  const getHomes = async () => {
    try{
      let res = await axios.get(`/api/homes`)
      setHomes(res.data)

    }catch(err) {
      alert('error check console')
      console.log(err)
    }
  }

  const renderHomes = () => {
    return homes.map (home => {
      return <Home key={home.id} {...home}/>
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <div></div>
      {renderHomes()}
    </div>
  )
}

export default Homes