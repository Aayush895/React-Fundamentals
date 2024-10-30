import { useState } from 'react'
import ItemList from './ItemList'
import style from './ItemInput.module.css'
import { nanoid } from 'nanoid'
import { setLocalStorage } from '../util'

function ItemInput() {
  const [itemInput, setitemInput] = useState('')
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  )

  function handleitemInput(e) {
    setitemInput(e.target.value)
  }

  function handleaddItem(e) {
    e.preventDefault()
    const newItem = {
      id: nanoid(),
      name: itemInput,
      completed: false,
    }

    const newItems = [...items, newItem]
    setItems(newItems)
    setitemInput('')
    setLocalStorage(newItems)
  }

  return (
    <>
      <div id={style.inputContainer}>
        <input
          type="text"
          name="input"
          value={itemInput}
          onChange={handleitemInput}
        />
        <button type="submit" onClick={handleaddItem}>
          Add Item
        </button>
      </div>
      <ItemList itemList={items} setItems={setItems} />
    </>
  )
}
export default ItemInput
