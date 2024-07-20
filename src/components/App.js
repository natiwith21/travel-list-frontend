import { useState } from "react";
import Logo from "./Logo";
import From from "./From";
import PackingList from "./PackingList";
import Stats from "./Stats";

// i have to make item state up lift and initialItems useless
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((b) => [...b, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />

      <From onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
