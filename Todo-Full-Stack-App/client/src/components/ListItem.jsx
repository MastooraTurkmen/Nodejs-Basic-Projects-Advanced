import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import { useState } from 'react'

const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <li className='list-item'>
      <div className="info-container">
        <TickIcon />
        <p className='task-title'>{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className='edit' onClick={()=>setShowModal(true)}>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
    </li>
  )
}

export default ListItem