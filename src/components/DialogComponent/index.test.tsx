import { render } from '@testing-library/react'
import Header from './index'

describe('Header component', () => {
    test('renders header component', async () => {
        const {baseElement, getByText} = render(<Header />);
        expect(baseElement).toMatchSnapshot()
        expect(getByText('🛡️ Clever Block Explorer')).toBeTruthy()
    })
})
