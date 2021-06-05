import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Home from './Home'
import HomeForm from './HomeForm'

const Homes = () => {
  const [homes, setHomes] = useState([])
  const [showForm, setShowForm] = useState(false)

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

  const addHome = (home) => {
    setHomes([home, ...homes])
  }

  const renderHomes = () => {
    return homes.map (home => {
      return <Home key={home.id} {...home}/>
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <div>
        <h1>Home Listings</h1>
        <button onClick={()=>setShowForm(!showForm)}>Add Home</button>
        {showForm && <HomeForm addHome={addHome}/>}
        {renderHomes()}
      </div>
    </div>
  )
}

export default Homes