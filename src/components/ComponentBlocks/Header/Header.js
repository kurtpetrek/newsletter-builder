import React, { Component } from 'react';

class Header extends Component {

  handleChange = (e) => {
    const { name, value } = e.target;
    const data_obj = {
      index: this.props.index,
      prop: name,
      value: value,
    };
    this.props.edit_component_block(data_obj);
  }

  toggleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const data_obj = {
      index: this.props.index,
      prop: name,
      value: checked,
    };
    this.props.edit_component_block(data_obj);
  }

  remove_block = () => {
    this.props.remove_component_block(this.props.index);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="utility-component-block">
        <h2>Header</h2>
        <label className="utility-label">
          <p>Header Text</p>
          <input
            type="text"
            name="text"
            value={data.text}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <br/>
        <label className="utility-label">
          <p>Font Size</p>
          <input
            type="number"
            name="font_size"
            value={data.font_size}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <br/>
        <label className="utility-label">
          Use Background Color?
          <input
            type="checkbox"
            name="has_background"
            checked={data.has_background}
            onChange={this.toggleCheckboxChange}
          />
        </label>

        <br/>
        <button onClick={this.remove_block}>REMOVE</button>

      </div>
    );
  }

}

export default Header;
