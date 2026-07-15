
import "./Testimonial.css";

const Testimonial = ({heading, tbrief, avatar}) => {
  return (
    <div className='testimonial-card'>
      <img src={avatar} alt="" style={{width:"75px", height: "75px"}} />
        <h3>{heading}</h3>
        <p>{tbrief}</p>
    </div>
  )
}

export default Testimonial