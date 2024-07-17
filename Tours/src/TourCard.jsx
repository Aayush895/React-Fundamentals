import { useState } from 'react'
import { PropTypes } from 'prop-types'
import styles from './TourCard.module.css'

const TourCard = ({ name, info, image, price }) => {
  const [readMore, setreadMore] = useState(info.substring(0, 295))
  const [toggleReadmore, settoggleReadmore] = useState(false)

  const handleexpandDescription = () => {
    setreadMore(info)
    settoggleReadmore(true)
  }

  const handleremoveDescription = () => {
    setreadMore(info.substring(0, 295))
    settoggleReadmore(false)
  }

  return (
    <div id={styles.cardContainer}>
      <div id={styles.imgContainer}>
        <img src={image} alt="tour-image" />
        <p>$ {price}</p>
      </div>

      <div id={styles.headerContainer}>
        <h1>{name}</h1>
        <p>
          {readMore}{' '}
          {toggleReadmore ? (
            <span onClick={handleremoveDescription}>&nbsp;Read Less</span>
          ) : (
            <span onClick={handleexpandDescription}>...Read More</span>
          )}
        </p>
      </div>

      <button>Not Interested</button>
    </div>
  )
}

TourCard.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
}
export default TourCard
