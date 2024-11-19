/* eslint-disable react/prop-types */
import text from '../../data'
import styles from './Body.module.css'

const Body = ({ paraNumber, isparaGenerated }) => {
  const paraData = text.slice(0, paraNumber)
  return (
    <div id={styles.bodyContainer} data-testing="body-component">
      {isparaGenerated &&
        paraData.map((textData, idx) => <p key={idx}>{textData}</p>)}
    </div>
  )
}
export default Body
