import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="">
      <img
        src={imgURL}
        alt="customer"
      />
      <p>{feedback}</p>
      <div className="">
        <img
          src={star}
          alt="rating star"
        />
        <p>({rating})</p>
      </div>
      <h3>
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard