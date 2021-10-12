
import {Editor, EditorState,RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {useState} from 'react';

function RichTextEditor() {

    
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleKeyCommand= (command, editorState)=>{
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }
  return (<Editor editorState={editorState} onChange={setEditorState} />);
}

export default RichTextEditor; 