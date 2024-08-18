import { PropTypes } from 'prop-types'
import styles from './FilterBtns.module.css'

const FilterBtns = ({ menuData, setfilteredMenu }) => {
  const handlefilterBreakfast = (e) => {
    if (e.target.textContent.toLowerCase() == 'all') {
      setfilteredMenu(menuData)
      return
    }
    const filterMenu = menuData.filter(
      (menuItem) => menuItem.category == e.target.textContent.toLowerCase()
    )
    setfilteredMenu(filterMenu)
  }

  return (
    <div id={styles.filterContainer}>
      <button onClick={handlefilterBreakfast}>All</button>
      <button onClick={handlefilterBreakfast}>Breakfast</button>
      <button onClick={handlefilterBreakfast}>Lunch</button>
      <button onClick={handlefilterBreakfast}>Shakes</button>
    </div>
  )
}

FilterBtns.propTypes = {
  menuData: PropTypes.array,
  setfilteredMenu: PropTypes.func,
}
export default FilterBtns
