import { PropTypes } from 'prop-types'
import styles from './Menu.module.css'

const Menu = ({ filteredMenu }) => {
  return (
    <div id={styles.menuContainer}>
      {filteredMenu.map((item) => (
        <div key={item.id} id={styles.menuCard}>
          <div id={styles.imgContainer}>
            <img src={item.img} />
          </div>
          <div id={styles.headerContainer}>
            <h1>{item.title}</h1>
            <p>${item.price}</p>
          </div>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

Menu.propTypes = {
  filteredMenu: PropTypes.array
}
export default Menu
