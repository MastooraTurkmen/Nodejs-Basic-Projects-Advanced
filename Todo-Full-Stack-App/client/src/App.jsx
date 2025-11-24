import { useState, useEffect } from 'react'
import ListHeader from './components/ListHeader'

function App() {

  const getData = async ()=>{
    const userEmail = 'mastooraturkmen@gmail.com'
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])
 
  return (
  <div className="app">
    <ListHeader listName={'Holiday tick list'}>

    </ListHeader>
  </div>
  )
}

export default App
