import React, { Component } from 'react';
import renderHTML from './../../helperFunctions/renderHTML';

class RenderPreview extends Component {

  render_HTML_pereview = () => {
    return renderHTML(this.props);
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{__html: this.render_HTML_pereview()}}
      />
    );
  }

}

export default RenderPreview;
