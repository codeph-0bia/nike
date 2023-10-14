import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import { Button } from '../components'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer}
          alt="Shoe promotion"
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>

      
    </section>
  )
}

export default SpecialOffer