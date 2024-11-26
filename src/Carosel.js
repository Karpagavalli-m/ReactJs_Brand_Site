
import { Carousel} from 'react-bootstrap'

const Carosel = ({array,id=''}) => {
  return (
    <>
    <Carousel data-bs-theme="dark" controls={(id==='banner')}>
    {array.map((item,idx) =>(
      <Carousel.Item >
      <img key={idx}
        className={`d-flex ${((id==='banner'))?'w-100':'w-100'} rounded`} id={id}
        src={require(`${item}`)}
      alt='Items'/>
    </Carousel.Item>
    ))}
  </Carousel>
  </>
  )
}

export default Carosel