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

  return (
    <div id={style.itemListContainer}>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.name}</p>
              <button onClick={() => handledeleteItem(item.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}
export default ItemList
