import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {
  useEffect(() =>{
    console.log(`${import.meta.env.VITE_BACKEND_URL}`);
    
    const fetchApi = async() =>{
      const {data}= await axios.get(`${import.meta.env.VITE_BACKEND_URL}/health`)
      console.log(data, "data")
    }
    fetchApi()
  },[])
  return (
    <div>App</div>
  )
}

export default App