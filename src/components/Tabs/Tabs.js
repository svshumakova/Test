import React, { Component, PropTypes } from 'react';
import Tab from './Tab';

export default class Tabs extends Component {
  state = {
    activeIndex: 0,
  }
  propTypes = {
    children: PropTypes.node.isRequired,
  }

  renderTabs(children) {
    const childrenArr = React.Children.toArray(children);
    const { activeIndex } = this.state;
    return (
        <ul>
          {
            childrenArr.map((item, index) =>
                <li
                    className={`tab ${index === activeIndex ? 'active': ''}`}
                    key={item.props.name}
                    onClick={() => this.setState({ activeIndex: index})}
                >
                  {item.props.name}
                </li>
            )
          }
        </ul>
    );
  }

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;
    const childrenArr = React.Children.toArray(children);
    const nextChildren = childrenArr
        .filter((item) => item.type === Tab);

    return (
        <div>
          {this.renderTabs(nextChildren)}
          <div>
            { nextChildren.map((item, index) =>
                index === activeIndex
                    ? React.cloneElement(item, {
                  active: true,
                })
                    : item
            )
            }
          </div>
        </div>
    );
  }
}