import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import assert from 'assert'

configure({ adapter: new Adapter() });

function Component() { return <div />; }

const wrapper = shallow(<Component />);

assert(wrapper.find('div').length === 1);

console.log('done');