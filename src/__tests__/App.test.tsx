import { render, cleanup } from '@testing-library/react';
import App from '../components/app/App';

afterEach(cleanup);
describe('App component', () => {
    test('is render', ()  => {
        render(<App/>);
    });
});
