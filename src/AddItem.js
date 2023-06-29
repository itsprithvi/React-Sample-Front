import React from 'react'

const AddItem = () => {
  return (
    <form action="" className=''>
        <label htmlFor="addItem"> Add Item </label>
        <input type="text"
               autoFocus
               id='addItem'
               placeholder='Add Item'
               required
        />
    </form>
  )
}

export default AddItem