import React, { Component } from 'react';
import ComponentBlockSelector from './../ComponentBlockSelector/ComponentBlockSelector';
import ComponentBlockRenderer from './../ComponentBlockRenderer/ComponentBlockRenderer';
import RenderPreview from './../RenderPreview/RenderPreview';

import renderHTML from './../../helperFunctions/renderHTML';

import {
  MAIN_BANNER,
  SPACER,
  HEADER,
  PARAGRAPH,
  FULL_WIDTH_IMAGE,
  BUTTON,
} from './../../constants/constants';

import './MainLayout.css';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component_blocks: [],
      title: "",
      description: ""
    };
  }

  add_component_block = (type) => {
    let stateObj = {};
    switch (type) {
      case MAIN_BANNER:
        stateObj.type = MAIN_BANNER;
        stateObj.img_src = "";
        stateObj.img_alt = "";
        stateObj.date = "";
        break;
      case SPACER:
        stateObj.type = SPACER;
        stateObj.size = "28";
        stateObj.has_background = false;
        break;
      case HEADER:
        stateObj.type = HEADER;
        stateObj.text = "";
        stateObj.has_background = false;
        break;
      case PARAGRAPH:
        stateObj.type = PARAGRAPH;
        stateObj.text = "";
        stateObj.has_background = false;
        break;
      case FULL_WIDTH_IMAGE:
        stateObj.type = FULL_WIDTH_IMAGE;
        stateObj.img_src = "";
        stateObj.img_alt = "";
        break;
      case BUTTON:
        stateObj.type = BUTTON;
        stateObj.href = "";
        stateObj.text = "";
        stateObj.has_background = false;
        break;
      default:
        return;
    }

    this.setState(prevState => {
      const state = {...prevState};
      state.component_blocks.push(stateObj);
      return state;
    });
  }

  edit_component_block = ({index, prop, value}) => {
    this.setState(prevState => {
      const state = {...prevState};
      state.component_blocks[index][prop] = value;
      return state;
    });
  }

  remove_component_block = (index) => {
    this.setState(prevState => {
      const state = {...prevState};
      state.component_blocks = state.component_blocks.filter((obj, i) => i !== index);
      return state;
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="MainLayout">
        <h1 style={{textAlign: 'center'}}>Newsletter Builder</h1>
        <div className="MainLayout-container">
          <div>
            <ComponentBlockRenderer
              component_blocks={this.state.component_blocks}
              edit_component_block={this.edit_component_block}
              remove_component_block={this.remove_component_block}
            />
            <ComponentBlockSelector add_component_block={this.add_component_block} />
          </div>
          <div>
            <RenderPreview component_blocks={this.state.component_blocks}/>
          </div>
        </div>
        <div style={{padding: '30px'}}>
          <h1 style={{textAlign: 'center'}}>HTML Output</h1>
          <code>
            {
              renderHTML({
                component_blocks: this.state.component_blocks,
                is_final: true
              })
            }
          </code>
        </div>
      </div>
    );
  }

}

export default MainLayout;
