import React, { Component } from 'react';
import MainBanner from './../ComponentBlocks/MainBanner/MainBanner';
import Spacer from './../ComponentBlocks/Spacer/Spacer';
import Header from './../ComponentBlocks/Header/Header';
import Paragraph from './../ComponentBlocks/Paragraph/Paragraph';
import FullWidthImage from './../ComponentBlocks/FullWidthImage/FullWidthImage';
import Button from './../ComponentBlocks/Button/Button';

import {
  MAIN_BANNER,
  SPACER,
  HEADER,
  PARAGRAPH,
  FULL_WIDTH_IMAGE,
  BUTTON,
} from './../../constants/constants';

class ComponentBlockRenderer extends Component {

  render_component_blocks = () => {
    const {
      component_blocks,
      edit_component_block,
      remove_component_block,
    } = this.props;

    return component_blocks.map((obj, i) => {
      switch (obj.type) {
        case MAIN_BANNER:
          return (
            <MainBanner
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        case SPACER:
          return (
            <Spacer
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        case HEADER:
          return (
            <Header
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        case PARAGRAPH:
          return (
            <Paragraph
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        case FULL_WIDTH_IMAGE:
          return (
            <FullWidthImage
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        case BUTTON:
          return (
            <Button
              edit_component_block={edit_component_block}
              data={obj}
              index={i}
              key={obj.type + i}
              remove_component_block={remove_component_block}
            />
          )
          break;
        default:
          return;
      }
    });
  }

  render() {
    return (
      <div>
        {this.render_component_blocks()}
      </div>
    );
  }

}

export default ComponentBlockRenderer;
