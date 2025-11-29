import { useState } from "react"

const Model = ({mode, setShowModel, getData, task}) => {
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'bob@gmail.com',
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 0,
    date: editMode ? "": new Date()
  })

  const postData = async(e)=>{
    e.preventDefault()
    try {
      const response= await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(response.status === 200){
        setShowModel(false)
        console.log("worked")
        getData()
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e)=>{ 
    e.preventDefault()
    console.log('changing',e.target.value)
    const {name, value} = e.target
    setData((data)=>({
      ...data,
      [name]: value
    }))

    console.log(data)
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={()=> setShowModel(false)}>X</button>
        </div>

        <form>
          <input 
            required 
            maxLength={30} 
            placeholder="Your task goes here" 
            type="text" 
            name="title"
            value={data.title}
          />
          <br/>
          <label htmlFor="range">Drag to select your current progress</label>
          <input type="range" name="progress" value={data.progress} onChange={handleChange} min="0" max="100"/>
          <input type="submit" className={mode} onClick={editMode ? '' : postData}/>
        </form>
      </div>
    </div>
  )
}

export default Model