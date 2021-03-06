import { cleanup, render, screen } from '@testing-library/react';
import Path from "../components/path/Path";

afterEach(cleanup);

describe('Path component working correctly', () => {
    test('if render root path', () => {
        render(<Path path={['root']}/>);
        const root = screen.getByText(/root/i);
        expect(root).toBeInTheDocument();
    });
    test('that separators are always one less than routes', () => {
        const path = ['root', '1', '2', '4'];
        render(<Path path={path}/>);
        const root = screen.getAllByText('/');
        expect(root.length).toEqual(path.length - 1);
    });
    test('path is rendering', () => {
        const fakeData = ['root', '1', '2'];
        render(<Path path={fakeData}/>);
        const path = screen.getAllByTestId('path').map(span => span.textContent);
        const fakeDataPath = fakeData.map(e => e);
        expect(path).toEqual(fakeDataPath);
    });
})