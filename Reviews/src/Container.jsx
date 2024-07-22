import { useState } from "react"
import reviews from "./data"
import ReviewCard from "./ReviewCard"
const Container = () => {
  const [personCounter, setpersonCounter] = useState(0)
  return (
    <div>
      <ReviewCard
        key={reviews[personCounter].id}
        image={reviews[personCounter].image}
        name={reviews[personCounter].name}
        job={reviews[personCounter].job}
        info={reviews[personCounter].text}
        personCounter={personCounter}
        setpersonCounter={setpersonCounter}
        totalPeople = {reviews.length}
      />
    </div>
  )
}
export default Container