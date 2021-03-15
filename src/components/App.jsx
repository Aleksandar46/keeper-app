import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  const addNotes = (inputContent =>{
    setNotes(prevState => {
      return [...prevState, inputContent];
    });
  })

  const deleteNote = (id => {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) =>{
        return index !== id;
      });
    });
  })

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
        {notes.map((toDoNote, index) => (
          <Note 
            key={index} 
            id={index} 
            title={toDoNote.title} 
            content={toDoNote.content}
            onClicked={deleteNote}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
