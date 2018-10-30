import React, { Component } from 'react';
import Select from 'react-select';
import {
  MAIN_BANNER,
  SPACER,
  HEADER,
  PARAGRAPH,
  FULL_WIDTH_IMAGE,
  BUTTON
} from './../../constants/constants';

import './ComponentBlockSelector.css'

class ComponentBlockSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_component_block: {label: "Main Banner", value: MAIN_BANNER},
    };
  }

  renderOptions = () => {
    return [
      {label: "Main Banner", value: MAIN_BANNER},
      {label: "Spacer", value: SPACER},
      {label: "Header", value: HEADER},
      {label: "Paragraph", value: PARAGRAPH},
      {label: "Full Width Image", value: FULL_WIDTH_IMAGE},
      {label: "Button", value: BUTTON},
    ]
  }

  handle_selected_component_block_change = (value) => {
    this.setState({selected_component_block: value});
  }

  addComponentBlock = () => {
    this.props.add_component_block(this.state.selected_component_block.value);
  }

  render() {
    return (
      <div>
        <h4 className="ComponentBlockSelector-header">Add Components</h4>
        <div className="ComponentBlockSelector">
          <div className="ComponentBlockSelector-select-holder">
            <Select
              value={this.state.selected_component_block}
              onChange={this.handle_selected_component_block_change}
              options={this.renderOptions()}
            />
          </div>
          <button onClick={this.addComponentBlock}>
            Add
          </button>
        </div>
      </div>
    );
  }

}

export default ComponentBlockSelector;
