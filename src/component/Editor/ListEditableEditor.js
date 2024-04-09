import {LexicalComposer} from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// import { $getRoot} from 'lexical';
import React, {useEffect , useState} from 'react';

import {SharedAutocompleteContext} from './context/SharedAutocompleteContext.tsx';
import {SharedHistoryContext} from './context/SharedHistoryContext.tsx';
import ListEditor from './ListEditor.js';
import PlaygroundNodes from './nodes/PlaygroundNodes.ts';
import {TableContext} from './plugins/TablePlugin.tsx';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme.ts';
import "./index.css"



function MyOnChangePlugin(props) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      props.onChange(editorState);
    });
  }, [editor, props]);
  return null;
}

export default function ListEditableEditor({text ,setText}) {
  const [update,setUpdate] = useState(null);

const initialEditorState = text
const initialConfig ={
  namespace: 'MyEditor',
  editorState: initialEditorState ? initialEditorState : `{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`,
  // editable: false,
  nodes: [...PlaygroundNodes],
  onError: (error)=>{
    throw error;
  },
  theme: PlaygroundEditorTheme,
};
//   function onChange(text) {
//   setText(text);
// }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <div className="editor-shell">
              <ListEditor isEditableEditor={true}/>
            </div>
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
      <MyOnChangePlugin
            onChange={(editorState) => {
              const rawContentState = editorState; //convertToRaw(editorState.getCurrentContent());
              const contentAsString = JSON.stringify(rawContentState);
              // console.log(contentAsString);
              // const contentAsJSON = JSON.parse(contentAsString);
              setText(contentAsString)
              // console.log(contentAsJSON);
              // setEditorState();
            }}
          />
    </LexicalComposer>
  );
}

// export default EditableEditor;