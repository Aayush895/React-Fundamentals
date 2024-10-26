import { useState } from 'react'
import styles from './Input.module.css'
import Body from './Body'

const Input = () => {
  const [paraNumber, setparaNumber] = useState(0)
  const [isparaGenerated, setisparaGenerated] = useState(false)

  function handleParaNumbers(e) {
    setisparaGenerated(false)
    setparaNumber(e.target.value)
  }

  function handleParaGeneration() {
    setisparaGenerated(true)
  }

   return (
    <>
      <div id={styles.inputContainer}>
        <p>Paragraphs:</p>
        <input
          type="number"
          name="input"
          id={styles.paraNumber}
          value={paraNumber}
          onChange={handleParaNumbers}
        />
        <button onClick={handleParaGeneration}>Generate</button>
      </div>
      {(paraNumber < 1 && isparaGenerated) && <p id={styles.noPara}>Para is not generated</p>}
      {(paraNumber > 9 && isparaGenerated) ? (
        <p id={styles.errorMsg}>Please enter an appropriate number</p>
      ) : (
        <Body paraNumber={paraNumber} isparaGenerated={isparaGenerated}/>
      )}
    </>
  )
}
export default Input
