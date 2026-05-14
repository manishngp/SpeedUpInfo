
import {IdCard, MapPinned} from 'lucide-react'
function Card({ id,
    name,
    image,
    status,
    phone,
    email,
    salary,
    department,
    city,
   }) {

    return (
       
            <div className="card">
            <div className="topPart">
                <div className="tagInTop">
                <h3>{status}</h3>
                 <span><IdCard />{id}</span>
                </div>
                <img src={image} alt="image" />

            </div>
            <div className="middlePart">
                
                <h1>{name}</h1>
                <hr />
                <h3>Email id: <span>{email}</span>  </h3>
                <h3>phone: {phone}</h3>
                <div className='dataMiddle'>
                    {/* <h4>{joiningDate}</h4> */}
                    <h3>{department} <span>Salary: {salary}</span></h3>
                </div>
                <hr />
               

            </div>
            <div className="bottomPart">
                 <p><MapPinned /> Location : {city}</p>
                    <button>Call Now</button>
            </div>



        </div>
     
    )
}

export default Card