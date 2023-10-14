import { ReviewCard } from "../components"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section>
      <h3>
        Whar Our 
        <span> Customers </span>
        Say?
      </h3>
      <p>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="">
        {
                  reviews.map((review, index) => (
              <ReviewCard />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews