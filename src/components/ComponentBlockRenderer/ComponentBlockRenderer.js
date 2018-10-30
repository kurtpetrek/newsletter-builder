import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
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

const SortableItem = SortableElement(({value, edit_component_block, remove_component_block, i}) =>{
  let obj = {...value};
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

const SortableList = SortableContainer(({items, edit_component_block, remove_component_block}) => {
  return (
    <div>
      {items.map((value, index) => {
        return (
          <SortableItem
            key={`${value.type}-${index}`}
            i={index}
            index={index}
            value={value}
            edit_component_block={edit_component_block}
            remove_component_block={remove_component_block}
          />
        )
      })}
    </div>
  );
});

class ComponentBlockRenderer extends Component {

  render() {
    const {
      component_blocks,
      edit_component_block,
      remove_component_block,
      on_sort_end
    } = this.props;

    const drag_key = component_blocks.reduce((accum, obj, i) => {
      accum = accum || '';
      accum += obj.type;
      accum += i;
      accum += (obj.text || obj.img_src || obj.size);
      return accum;
    }, "");

    return (
      <div key={""}>
        <SortableList
          items={component_blocks}
          edit_component_block={edit_component_block}
          remove_component_block={remove_component_block}
          onSortEnd={on_sort_end}
          useWindowAsScrollContainer={true}
        />
      </div>
    );
  }

}

export default ComponentBlockRenderer;
