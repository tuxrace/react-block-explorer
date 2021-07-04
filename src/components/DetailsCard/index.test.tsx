import { render } from '@testing-library/react'
import DetailsCard from './index'

describe('DetailsCard component', () => {
    test('renders DetailsCard component', async () => {
        const props = {
            loading: false,
            contract: {}
        }
        const {baseElement} = render(<DetailsCard {...props}/>);
        expect(baseElement).toMatchSnapshot()
    })
})
