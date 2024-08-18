import { useState } from 'react'
import Header from './Header'
import FilterBtns from './FilterBtns'
import Menu from './Menu'
import menu from '../data'
import styles from './Container.module.css'

const Container = () => {
  const menuData = menu
  const [filteredMenu, setfilteredMenu] = useState(menu)

  return (
    <div id={styles.container}>
      <Header />
      <FilterBtns menuData={menuData} setfilteredMenu={setfilteredMenu} />
      <Menu filteredMenu={filteredMenu} />
    </div>
  )
}
export default Container
