import React from 'react';
import { shallow } from 'enzyme';

import Search from '../search.jsx';

describe('Search', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Search debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with no props', () => {
        const component = shallow(<Search />);
    
        expect(component).toMatchSnapshot();
    });
});
