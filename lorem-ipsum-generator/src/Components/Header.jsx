import styles from './Header.module.css'

const Header = () => {
  return (
    <div id={styles.headerContainer} data-testid="header-component">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
    </div>
  )
}
export default Header