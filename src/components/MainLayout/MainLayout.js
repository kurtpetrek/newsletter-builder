import React, { Component } from 'react';
import ComponentBlockSelector from './../ComponentBlockSelector/ComponentBlockSelector';
import ComponentBlockRenderer from './../ComponentBlockRenderer/ComponentBlockRenderer';
import ShowHTMLOutput from './../ShowHTMLOutput/ShowHTMLOutput';
import RenderPreview from './../RenderPreview/RenderPreview';
import TitleDescription from './../TitleDescription/TitleDescription';
import SaveBar from './../SaveBar/SaveBar';

import { arrayMove } from 'react-sortable-hoc';

import {
  MAIN_BANNER,
  SPACER,
  HEADER,
  PARAGRAPH,
  FULL_WIDTH_IMAGE,
  BUTTON,
  SMALL_IMAGE,
} from './../../constants/constants';

import './MainLayout.css';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component_blocks: [],
      title: "",
      description: "",
      lock_render_view_scroll: false,
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
        stateObj.has_top_border = false;
        break;
      case HEADER:
        stateObj.type = HEADER;
        stateObj.font_size = '32';
        stateObj.text = "";
        stateObj.has_background = false;
        break;
      case PARAGRAPH:
        stateObj.type = PARAGRAPH;
        stateObj.text = "";
        stateObj.font_size = '22';
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
      case SMALL_IMAGE:
        stateObj.type = SMALL_IMAGE;
        stateObj.img_src = "";
        stateObj.img_alt = "";
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

  on_sort_end = ({oldIndex, newIndex}) => {
    this.setState({
      component_blocks: arrayMove(this.state.component_blocks, oldIndex, newIndex),
    });
  };

  set_input_value = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      const state = {...prevState};
      state[name] = value;
      return state;
    });
  };

  set_state_from_load = (data) => {
    this.setState(prevState => {
      return data;
    });
  };

  toggle_render_view_lock = () => {
    this.setState(prevState => {
      const state = {...prevState};
      state.lock_render_view_scroll = !state.lock_render_view_scroll;
      return state;
    });
  };

  render() {
    return (
      <div className="MainLayout">
        <SaveBar
          currentState={this.state}
          set_state_from_load={this.set_state_from_load}
          toggle_render_view_lock={this.toggle_render_view_lock}
        />

        <TitleDescription
          handle_change={this.set_input_value}
          title={this.state.title}
          description={this.state.description}
        />
        <div className="MainLayout-container">
          <div>
            <ComponentBlockRenderer
              component_blocks={this.state.component_blocks}
              edit_component_block={this.edit_component_block}
              remove_component_block={this.remove_component_block}
              on_sort_end={this.on_sort_end}
            />
            <ComponentBlockSelector add_component_block={this.add_component_block} />
          </div>
          <div>
            <RenderPreview
              component_blocks={this.state.component_blocks}
              is_final={false}
              lock_preview_scroll={this.state.lock_render_view_scroll}
            />
          </div>
        </div>
        <ShowHTMLOutput
          component_blocks={this.state.component_blocks}
          is_final={true}
          title={this.state.title}
          description={this.state.description}
        />
      </div>
    );
  }

}

export default MainLayout;
