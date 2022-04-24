import { cleanup, render, screen } from '@testing-library/react';
import Files from '../components/content//files/Files';

afterEach(cleanup);
describe('Files component works with no issues', () => {
    test('renders a files', () => {
        const fakeFiles = [{name:'file_1'}, {name:'file_2'}, {name:'file_3'}];
        render(<Files files={fakeFiles} />);
        const files = screen.getAllByTestId('files').map(p => p.textContent);
        const fakeDataFiles = fakeFiles.map(e => e.name);
        expect(files).toEqual(fakeDataFiles);
    });
});