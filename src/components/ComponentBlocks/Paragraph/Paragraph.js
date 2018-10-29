import React, { Component } from 'react';

class Paragraph extends Component {

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

  addLinkHTML = () => {
    let text = this.props.data.text;
    text += `<a href="URL_LOCATION" target="_blank" rel="noopener noreferrer" style="Margin:0;color:#707070;font-family:'Open Sans','Google Sans',Helvetica,Arial,sans-serif;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:underline;word-break:normal">CLICKABLE TEXT</a>`;
    const data_obj = {
      index: this.props.index,
      prop: 'text',
      value: text,
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
        <h2>Paragraph</h2>
        <label className="utility-label">
          <p>Paragraph Text</p>
          <textarea
            type="text"
            name="text"
            value={data.text}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <br/>
        <button onClick={this.addLinkHTML}>Add Link HTML</button>
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

export default Paragraph;
