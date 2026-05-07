export default function HomestarsReviewsBig() {
  const bigHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd/large'

  return (
    <div className="hidden md:flex justify-center mt-10 ">
    <iframe
      // className='lg:scale-125 xl:scale-150'
      height='490'
      frameBorder='0'
      width='490'
      src={bigHomestarsUrl}
      scrolling='no'
      title='Homestars Reviews Big for Alberta Colour Painting'
      aria-label='Homestars Reviews Big for Alberta Colour Painting'></iframe>
      </div>
  )
}