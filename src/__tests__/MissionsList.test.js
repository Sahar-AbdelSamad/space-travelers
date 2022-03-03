import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MissionList from '../components/MissionList';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
