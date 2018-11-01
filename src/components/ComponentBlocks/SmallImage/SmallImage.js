import React, { Component } from 'react';

class FullWidthImage extends Component {

  handleChange = (e) => {
    const { name, value } = e.target;
    const data_obj = {
      index: this.props.index,
      prop: name,
      value: value,
    };
    this.props.edit_component_block(data_obj);
  }

  remove_block = () => {
    this.props.remove_component_block(this.props.index);
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


  render() {
    const { data } = this.props;
    return (
      <div className="utility-component-block">
        <h2>Small Image</h2>
        <label className="utility-label">
          <p>Image SRC</p>
          <input
            type="text"
            name="img_src"
            value={data.img_src}
            onChange={this.handleChange}
          />
        </label>

        <label className="utility-label">
          <p>Image Alt</p>
          <input
            type="text"
            name="img_alt"
            value={data.img_alt}
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

export default FullWidthImage;
