import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
