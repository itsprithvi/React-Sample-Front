
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import './App.css';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";



function App() {

  const API_URL = 'http://localhost:3500/itemss';

  const [items, setItems] = useState([])
  
  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Data not received"); 
        console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())()
    }, 3000)

  }, [])

  const addItem = (item) => {
    const addNewItem = {id:item.length+1, checked: false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    console.log(`id ${id}`);
    const listItems = items.map((item) => item.id===id ? {...item ,checked: !item.checked}: item)
    setItems(listItems)
  }
  
  const handleDelete = (id) => {
    console.log(`id ${id}`)
    const listItems = items.filter((item) => item.id!==id);
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem);
    addItem(newItem)
    setNewItem('')
  }

 


  return (
    <div className="App">
      <Header  title="Course List" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p> Loading Items... </p>}
        {fetchError && <p> {`Error : ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
          items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Common List"
}

export default App;