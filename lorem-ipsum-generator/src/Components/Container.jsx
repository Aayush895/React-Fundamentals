import Header from './Header'
import Input from './Input'
import styles from './Container.module.css'

const Container = () => {
  return (
    <div id={styles.outerContainer}>
      <Header />
      <Input />
    </div>
  )
}
export default Container