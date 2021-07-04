import { render } from '@testing-library/react'
import Searchbar from './index'

describe('Searchbar component', () => {
    test('renders Searchbar component', async () => {
        const {baseElement} = render(<Searchbar />);
        expect(baseElement).toMatchSnapshot()
    })
})
