import { useNavigate } from 'react-router-dom';
import './lunch.css'

const Lunch = ({lunch}) => {
  const { _id, image, name, recipe, price } = lunch;
  const navigate = useNavigate();
  const navigatetofoodDetails=(id)=>{
       navigate(`/lunchs/${id}`)
  }
    return (
      <div className="service h-100">
        <img src={image} alt="" />
        <div className="service-text">
          <h6>{name}</h6>
          <p>Price: {price}</p>
          <p>
            <small>{recipe}</small>
          </p>
        </div>
        <button className="food-btn" onClick={() => navigatetofoodDetails(_id)}>
          Food Details
        </button>
      </div>
    );
};

export default Lunch;
