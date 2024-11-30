import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch all items from the backend
    axios
      .get("http://localhost:5000/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addItem = (newItem) => {
    axios
      .post("http://localhost:5000/items", newItem)
      .then((response) => {
        setItems([...items, response.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Item CRUD Application</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
