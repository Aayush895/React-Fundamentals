import { useState, useEffect } from 'react'
import axios from 'axios'
import TourCard from './TourCard'
import Loading from './Loading'
import styles from './Tours.module.css'

const Tours = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetchToursdata()
  }, [])

  const fetchToursdata = async () => {
    try {
      const data = await axios.get(
        `https://www.course-api.com/react-tours-project`
      )
      const toursData = data.data
      setTours(toursData)
      setisLoading(false)
    } catch (error) {
      throw new Error(
        `Couldn't load data from the given api. The error is: ${error}`
      )
    }
  }

  return (
    <div id={styles.toursContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        tours.map((tour) => (
          <TourCard
            key={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
          />
        ))
      )}
    </div>
  )
}
export default Tours
