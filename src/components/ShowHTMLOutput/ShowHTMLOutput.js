import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import renderHTML from './../../helperFunctions/renderHTML';

class ShowHTMLOutput extends Component {

  render() {
    const content = renderHTML({
      component_blocks: this.props.component_blocks,
      title: this.props.title,
      description: this.props.description,
      is_final: this.props.is_final
    });

    return (
      <div style={{padding: '10px'}}>
        <div style={{textAlign: 'center'}}>
          <h1>HTML Output</h1>
          <a href="https://unminify.com/" target="_blank" rel="noopener noreferrer">Unminify HTML here</a>
          <br/>
          <br/>
          <CopyToClipboard text={content}>
            <button style={{background: '#308dc6', padding: '10px 20px', color: '#fff', fontSize: '16px'}}>Copy HTML to clipboard</button>
          </CopyToClipboard>
          <br/>
          <p>Final code that goes in email should be <a href="http://minifycode.com/html-minifier/" target="_blank" rel="noopener noreferrer">minified</a></p>
        </div>
        <div style={{background: '#eee', padding: '10px'}}>
          <code>
            { content }
          </code>
        </div>
      </div>
    );
  }

}

export default ShowHTMLOutput;
