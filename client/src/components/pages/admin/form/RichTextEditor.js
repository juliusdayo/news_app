
import { convertToRaw, EditorState } from 'draft-js';
import { useState,useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor =({newsData,setNewsData}) =>{
  const [editorState,setEditorState] = useState(()=>EditorState.createEmpty())

    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
   
    useEffect(()=>{
        setNewsData({...newsData, Content:value})
    },[value])

    
 
  
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
      />
    )
  
}

export default RichTextEditor;