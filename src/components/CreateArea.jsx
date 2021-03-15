import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [inputContent, setInputContent] = useState({title: "",content: ""});

  const handleChange = event => {
    const {name, value} = event.target;
    setInputContent(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const expand = () =>{
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input 
          value={inputContent.title} 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          autoComplete="off" 
        />
        )}
        <textarea 
          value={inputContent.content} 
          onChange={handleChange}
          onClick={expand} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={(e) => {
              e.preventDefault();
              props.onAdd(inputContent);
              setInputContent({title: "",content: ""});
            }}><AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
