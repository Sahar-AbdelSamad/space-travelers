import { useSelector } from 'react-redux';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <section className="rockets">
      {rockets.map((item) => (
        <div className="flex" key={item.id}>
          <img className="img" src={item.flickr_images} alt="rocket" />
          <div className="rocket-info">
            <h2>{item.rocket_name}</h2>
            <p>{rockets[0].description}</p>
            <button className="btn btn-reserve" type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
