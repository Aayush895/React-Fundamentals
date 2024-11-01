/* eslint-disable react/prop-types */
import { setLocalStorage } from '../util'
import style from './ItemList.module.css'

function ItemList({ setItems }) {
  const items = JSON.parse(localStorage.getItem('list'))

  function handledeleteItem(id) {
    const filteredItem = items.filter((item) => item.id != id)
    setItems(filteredItem)
    setLocalStorage(filteredItem)
  }

  function handleeditItem(id) {
    const editItem = items.map((item) => {
      if (item.id == id) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }

      return item
    })
    setItems(editItem)
    setLocalStorage(editItem)
  }

  return (
    <div id={style.itemListContainer}>
      {items &&
        items.map((item) => (
          <div key={item.id} id={style.itemList}>
            <div>
              <input
                type="checkbox"
                name="isCompleted"
                id=""
                checked={item.completed}
                onChange={() => handleeditItem(item.id)}
              />
              <p
                style={{
                  textTransform: 'capitalize',
                  textDecoration: item.completed && 'line-through',
                }}
              >
                {item.name}
              </p>
            </div>
            <button onClick={() => handledeleteItem(item.id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}
export default ItemList
