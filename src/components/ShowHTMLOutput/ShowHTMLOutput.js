import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import renderHTML from './../../helperFunctions/renderHTML';

class ShowHTMLOutput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.__isMounted = true;
  }

  componentWillUnmount() {
    this.__isMounted = false;
  }

  copy_clicked = () => {
    this.setState({copied: true});
    if (this.__isMounted) {
      setTimeout(()=>{
        this.setState({copied: false});
      },2000)
    }
  };

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
          <br/>
          <CopyToClipboard
            text={content}
            onCopy={this.copy_clicked}
          >
            <button style={{background: '#308dc6', padding: '10px 20px', color: '#fff', fontSize: '16px'}}>Copy HTML to clipboard</button>
          </CopyToClipboard>
          <br/>
          {
            this.state.copied &&
            <p>Copied!</p>
          }
          <p>Final code that goes in email should be <a href="http://minifycode.com/html-minifier/" target="_blank" rel="noopener noreferrer">minified</a></p>
        </div>
      </div>
    );
  }

}

export default ShowHTMLOutput;
