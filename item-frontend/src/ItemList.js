import React from "react";

function ItemList({ items, deleteItem }) {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong>: {item.description}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
