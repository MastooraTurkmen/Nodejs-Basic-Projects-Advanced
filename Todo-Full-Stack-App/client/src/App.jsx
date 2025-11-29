import { useState, useEffect } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

function App() {
  const userEmail = 'mastooraturkmen@gmail.com'
  const [tasks, setTasks] = useState([])

  const getData = async ()=>{
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  // Sort by date
  const sortedTasks= tasks?.sort((a,b)=> new Date(a.date) - new Date(b.date))

  console.log(sortedTasks)
 
  return (
  <div className="app">
    <ListHeader listName={'Holiday tick list'} getData={getData}>
      {sortedTasks?.map((task)=> {
       return <ListItem key={task.id} task={task} getData={getData}/>}
      )}

    </ListHeader>
  </div>
  )
}

export default App
