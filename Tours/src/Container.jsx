import Tours from './Tours'
import styles from './Container.module.css'

const Container = () => {
  return (
    <div id={styles.container}>
      <h1>Our Tours</h1>
      <Tours />
    </div>
  )
}
export default Container