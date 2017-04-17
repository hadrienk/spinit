'use strict';

import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/lua';
import 'brace/theme/github';

require('styles/hadrien/Editor.styl');

let EditorComponent = (props) => (
  <div className="editor-component">
    <AceEditor
      mode="lua"
      theme="github"
      width="100%"
      height="100%"
      // onChange={onChange}
      name="editor"
      editorProps={{$blockScrolling: true}}
    />
  </div>
);

EditorComponent.displayName = 'HadrienEditorComponent';

// Uncomment properties you need
// EditorComponent.propTypes = {};
// EditorComponent.defaultProps = {};

export default EditorComponent;
