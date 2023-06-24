import './lunch.css'

const Lunch = ({lunch}) => {
    const { id, image, name, recipe, price } = lunch;
    return (
      <div className="service">
        <img src={image} alt="" />
        <div className="service-text">
          <h6>{name}</h6>
          <p>Price: {price}</p>
          <p>
            <small>{recipe}</small>
          </p>
        </div>
      </div>
    );
};

export default Lunch;
