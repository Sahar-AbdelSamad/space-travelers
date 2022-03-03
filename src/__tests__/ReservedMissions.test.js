import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ReservedMissions from '../components/ReserveMission';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ReservedMissions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
