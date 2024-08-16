import AccordionContainer from './AccordionContainer'
import styles from './OuterContainer.module.css'

const OuterContainer = () => {
  return (
    <div id={styles.Container}>
      <AccordionContainer />
    </div>
  )
}
export default OuterContainer