import { useState } from 'react'
import questions from '../data.js'
import styles from './Questions.module.css'

const Questions = () => {
  const [selectedId, setselectedId] = useState(1)

  const handleAccordion = (id) => {
    setselectedId(id)
  }

  const handleAccordion2 = () => {
    setselectedId(0)
  }
  return (
    <div id={styles.questionsContainer}>
      {questions.map((question) => (
        <div key={question.id} id={styles.questions}>
          <div id={styles.questionCard}>
            <p>{question.title}</p>
            {selectedId == question.id ? (
              <div onClick={handleAccordion2}>-</div>
            ) : (
              <div
                onClick={() => {
                  handleAccordion(question.id)
                }}
              >
                +
              </div>
            )}
          </div>
          <p style={{ display: selectedId == question.id ? 'block' : 'none' }}>
            {question.info}
          </p>
        </div>
      ))}
    </div>
  )
}
export default Questions
