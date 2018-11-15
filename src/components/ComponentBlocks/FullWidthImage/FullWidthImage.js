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
        <h2>Full Width Image</h2>
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
          Make Link?
          <input
            type="checkbox"
            name="is_link"
            checked={data.is_link}
            onChange={this.toggleCheckboxChange}
          />
        </label>

        {
          data.is_link &&
          <label className="utility-label">
            <p>Link HREF</p>
            <input
              type="text"
              name="link_href"
              value={data.link_href}
              onChange={this.handleChange}
            />
          </label>
        }

        <br/>

        <button onClick={this.remove_block}>REMOVE</button>
      </div>
    );
  }

}

export default FullWidthImage;
