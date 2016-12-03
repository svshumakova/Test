import React from 'react';
import { mount } from 'enzyme';
import Tabs from './Tabs';
import Tab from './Tab';
describe('Tabs', () => {
  it('should render tabs', () => {
    const tabs = mount(
        <div>dfgdfg</div>
    );
    
    console.log("tabs", tabs);
  });
});