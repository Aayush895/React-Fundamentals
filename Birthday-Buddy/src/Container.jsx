import { useState } from "react"
import Header from "./Header"
import List from "./List"
import data from './data.js'
import styles from './Container.module.css'

const Container = () => {
  const [peopleList, setpeopleList] = useState(data)
  const handleClear = () => {
    setpeopleList([])
  }
  return (
    <div id={styles.container}>
      <Header total={peopleList.length}/>
      <List list={peopleList}/>
      <button onClick={handleClear}>Clear All</button>
    </div>
  )
}
export default Container