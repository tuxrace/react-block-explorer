import { render } from '@testing-library/react'
import ToggleComponent from './index'

describe('ToggleComponent component', () => {
    test('renders ToggleComponent component', async () => {
        const {baseElement} = render(<ToggleComponent />);
        expect(baseElement).toMatchSnapshot()
    })
})
