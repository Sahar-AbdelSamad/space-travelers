import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
