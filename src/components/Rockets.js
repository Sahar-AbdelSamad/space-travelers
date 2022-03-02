import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  return (
    <section className="rockets">
      {rockets.map((item) => (
        <div className="flex" key={item.id}>
          <img className="img" src={item.flickr_images} alt="rocket" />
          <div className="rocket-info">
            <h2>{item.rocket_name}</h2>
            {item.reserved ? (
              <p>
                <span className="span">Reserved</span>
                {rockets[0].description}
              </p>
            ) : <p>{rockets[0].description}</p>}
            { (item.reserved) ? <button className="btn btn-cancel-reservation" type="button" onClick={() => dispatch(cancelReservation(item.id))}>Cancel Reservation</button>
              : <button className="btn btn-reserve" type="button" onClick={() => dispatch(reserveRocket(item.id))}>Reserve Rocket</button>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
