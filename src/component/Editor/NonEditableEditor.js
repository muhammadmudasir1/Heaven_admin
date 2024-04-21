import {LexicalComposer} from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// import { $getRoot} from 'lexical';
import React, {useEffect, useState} from 'react';

import {SharedAutocompleteContext} from './context/SharedAutocompleteContext.tsx';
import {SharedHistoryContext} from './context/SharedHistoryContext.tsx';
import Editor from './Editor.js';
import PlaygroundNodes from './nodes/PlaygroundNodes.ts';
import {TableContext} from './plugins/TablePlugin.tsx';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme.ts';
import "./index.css"
import { $getSelection } from 'lexical';



function MyOnChangePlugin(props) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      props.onChange(editorState);
    });
  }, [editor, props]);
  return null;
}


export default function NonEditableEditor({text }) {
    const [update,setUpdate] = useState(null);
    useEffect(()=>{
      const jsonData=JSON.parse(text)
      jsonData.root.children.forEach(element => {
        if (element.type="paragraph"){
          element.children.forEach((item)=>{
            if(item.type=="image"){
              console.log(item)
            }
          })
        }
      });
    },[text])

const initialEditorState = text
const initialConfig ={
  namespace: 'MyEditor',
  editorState: initialEditorState ? initialEditorState : `{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`,
  editable: false,
  nodes: [...PlaygroundNodes],
  onError: (error)=>{
    throw error;
  },
  theme: PlaygroundEditorTheme,
};
const getUpdateFunction=(childUpdateFunc)=>{
    setUpdate(childUpdateFunc)
    console.log(typeof(childUpdateFunc))
}
 useEffect(()=>{
    if(update){
        console.log("If typibzjhfv")
        update(text)
    }
 },[text])
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <div className="editor-shell">
              <Editor isEditableEditor={false}/>
            </div>
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
      <MyOnChangePlugin
            onChange={(editorState) => {
              const rawContentState = editorState;
              const contentAsString = JSON.stringify(rawContentState);
            }}
          />
    </LexicalComposer>
  );
}
