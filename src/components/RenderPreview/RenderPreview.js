import React, { Component } from 'react';
import renderHTML from './../../helperFunctions/renderHTML';
import './RenderPreview.css';

class RenderPreview extends Component {

  render_HTML_pereview = () => {
    return renderHTML(this.props);
  }

  render() {
    return (
      <div className="RenderPreview">
        <div
          dangerouslySetInnerHTML={{__html: this.render_HTML_pereview()}}
        />
      </div>
    );
  }

}

export default RenderPreview;
