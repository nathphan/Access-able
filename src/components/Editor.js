import React, { Component } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";

export class Editor extends Component {

  componentDidMount() {
    const editor = document.querySelector('.ace_text-input');
    editor.setAttribute('aria-label', 'code editor')
  }

  render() {
    return (
      <AceEditor 
        height='100%' 
        width='100%' 
        mode='html' 
        placeholder='Fill in inputs on the left to generate html'
        theme="github"
        value={this.props.code}
      />
    );
  }
}

export default Editor
