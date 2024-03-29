import React, { Component } from 'react';

class Spacer extends Component {

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
        <h2>Spacer</h2>
        <label className="utility-label">
          <p>Size</p>
          <input
            type="number"
            name="size"
            value={data.size}
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
        <br/>
        <label className="utility-label">
          Add top border?
          <input
            type="checkbox"
            name="has_top_border"
            checked={data.has_top_border}
            onChange={this.toggleCheckboxChange}
          />
        </label>

        <br/>
        <button onClick={this.remove_block}>REMOVE</button>

      </div>
    );
  }

}

export default Spacer;
