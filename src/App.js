
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import './App.css';



function App() {

  const [items, setItems] = useState(
    [
        {
            id: 1,
            checked : false,
            item : 'Practice Coding'
        },
        {
            id: 2,
            checked : false,
            item : 'Play Cricket'
        },
        {
            id: 3,
            checked : false,
            item : 'Reading Book'
        }
    ]
  )
  
  const handleCheck = (id) => {
    console.log(`id ${id}`);
    const listItems = items.map((item) => item.id===id ? {...item ,checked: !item.checked}: item)
    setItems(listItems)
  }
  
  const handleDelete = (id) => {
    console.log(`id ${id}`)
    const listItems = items.filter((item) => item.id!==id);
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  
  }




  return (
    <div className="App">
      <Header  title="prithvi University" />
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Stanford University"
}

export default App;