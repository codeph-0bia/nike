import { shoe8 } from "../assets/images"
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2>
          We Provide You
          <span>Super</span>
          <span>Quality </span> Shoes
        </h2>
        <p>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label='View Details'/>
        </div>

        {/*image*/}

        <div className="flex">
          <img src={shoe8} alt="product detail" width={570} height={522} className="object-contain" />
        </div>


      </div>

    </section>
  )
}

export default SuperQuality