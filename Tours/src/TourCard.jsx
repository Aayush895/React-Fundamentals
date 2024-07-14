import { PropTypes } from 'prop-types'
import styles from './TourCard.module.css'

const TourCard = ({ name, info, image, price }) => {
  return <div id={styles.cardContainer}>
    <div id={styles.imgContainer}>
      <img src={image} alt="tour-image" />
      <p>$ {price}</p>
    </div>

    <div id={styles.headerContainer}>
      <h1>{name}</h1>
      <p>{info}</p>
    </div>

    <button>Not Interested</button>
  </div>
}

TourCard.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
}
export default TourCard
