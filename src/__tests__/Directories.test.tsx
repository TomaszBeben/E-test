import { cleanup, render, screen } from '@testing-library/react'
import Directories from '../components/content/directories/Directories'

afterEach(cleanup)
describe('Directories component works with no issues', () => {
    test('renders a folders', () => {
        const fakeData = [{id:0, name:'dir_1'}, {id:1, name:'dir_2'}, {id:2, name:'dir_3'}]
        render(<Directories folders={fakeData} />)
        const folders = screen.getAllByTestId('directories').map(div => div.textContent)
        const fakeDataFolders = fakeData.map(e => e.name)
        expect(folders).toEqual(fakeDataFolders)
    })
})