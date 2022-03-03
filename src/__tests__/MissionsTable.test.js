import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MissionsTable from '../components/MissionsTable';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionsTable />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
