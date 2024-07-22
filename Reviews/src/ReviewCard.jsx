import { PropTypes } from 'prop-types'
const ReviewCard = ({
  image,
  name,
  job,
  info,
  personCounter,
  setpersonCounter,
  totalPeople,
}) => {
  const handleIncrementCounter = () => {
    if (personCounter != totalPeople - 1) setpersonCounter(personCounter + 1)
  }

  const handleDecrementCounter = () => {
    if (personCounter != 0) setpersonCounter(personCounter - 1)
  }

  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * totalPeople)
    setpersonCounter(randomIndex)
  }

  return (
    <div>
      <div>
        <img src={image} alt="profile-pic" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{job}</p>
        <p>{info}</p>
      </div>
      <div>
        <button
          onClick={handleDecrementCounter}
          disabled={personCounter == 0 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={handleIncrementCounter}
          disabled={personCounter == totalPeople - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <button onClick={randomPerson}>Surprise Me</button>
    </div>
  )
}

ReviewCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  info: PropTypes.string,
  personCounter: PropTypes.number,
  setpersonCounter: PropTypes.func,
  totalPeople: PropTypes.number,
}
export default ReviewCard
