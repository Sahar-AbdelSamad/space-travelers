import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ReservedMissionsList from '../components/ReservedMissionList';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ReservedMissionsList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
