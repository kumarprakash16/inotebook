import React from 'react'

export const Noteitem = (props) => {
    const note = props.note;
  return (
    <>
    <div className="col-md-3">
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.description}</p><div></div>
    </div>
  </div>
  </div>
  </>
  )
}
