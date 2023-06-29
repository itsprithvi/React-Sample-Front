import React from 'react'
import ItemsList from './ItemsList'

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
        {(items.length) ? (
            <ItemsList
                items = {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        ) : (
            <h2>Your List is Empty</h2>
        )}
        
    </main>
  )
}

export default Content