import React from 'react'

const ListHeader = ({listName, children}) => {

  const signOut=()=>{
    console.log("Signing out...")
  }

  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">Add new</button>
        <button className="signout" onClick={signOut}>Sign out</button>
      </div>
      <ul className="list">
        {children}
      </ul>
    </div>
  )
}

export default ListHeader