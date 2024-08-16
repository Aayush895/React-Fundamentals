import styles from './AccordionContainer.module.css'
import Header from './Header'
import Questions from './Questions'

const AccordionContainer = () => {
  return (
    <div id={styles.accordionContainer}>
      <Header />
      <Questions />
    </div>
  )
}
export default AccordionContainer