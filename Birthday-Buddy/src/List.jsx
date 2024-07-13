import {PropTypes} from "prop-types"
import styles from './List.module.css'

const List = ({list}) => {
  return (
    <>
      {list.map((person) => (
        <div key={person.id} id={styles.container}>
          <img src={person.image} alt="person-img" />
          <div>
            <p>{person.name}</p>
            <p>{person.age} years</p>
          </div>
        </div>
      ))}
    </>
  )
}

List.propTypes = {
  list: PropTypes.array
}
export default List