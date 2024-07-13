import { PropTypes } from 'prop-types'
import styles from './Header.module.css'

const Header = ({ total }) => {
  return (
    <div id={styles.header}>
      <h1>{total} Birthdays Today</h1>
    </div>
  )
}

Header.propTypes = {
  total: PropTypes.number
}
export default Header
