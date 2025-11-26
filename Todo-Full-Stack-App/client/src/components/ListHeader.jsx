import { useState } from 'react'
import Model from './Model'

const ListHeader = ({listName}) => {
  const[showModel, setShowModel]= useState(false)

  const signOut=()=>{
    console.log("Signing out...")
  }

  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={()=> setShowModel(true)}>Add new</button>
        <button className="signout" onClick={signOut}>Sign out</button>
      </div>
     {showModel && <Model mode={'create'} setShowModel={setShowModel}/>}
    </div>
  )
}

export default ListHeader