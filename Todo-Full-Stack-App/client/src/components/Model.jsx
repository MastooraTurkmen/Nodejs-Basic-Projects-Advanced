import { useState } from "react"

const Model = ({mode, setShowModel}) => {
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "": new Date()
  })

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
          <input type="submit" className={mode}/>
        </form>
      </div>
    </div>
  )
}

export default Model