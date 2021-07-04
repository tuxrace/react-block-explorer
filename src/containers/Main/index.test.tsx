import { render } from '@testing-library/react'
import Main from './index'

describe('Main component', () => {
    test('renders Main component', async () => {
        const {baseElement} = render(<Main />);
        expect(baseElement).toMatchSnapshot()
    })
})
