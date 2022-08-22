import { useState } from "react";
import FormInput from "./components/InputNote/FormInput";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import NoteList from "./components/Notes/NoteList";
import SearchBar from "./components/SearchNote/SearchBar";
import { getInitialData } from "./components/utils/data";

const dummyData = getInitialData();
function App() {
  const [notesData, setNotesData] = useState(dummyData);
  const [searchNote, setSearchNote] = useState("");

  const addNoteHandler = (title, text) => {
    setNotesData((prevState) => {
      return [
        ...prevState,
        {
          id: +new Date(),
          title: title,
          body: text,
          createdAt: new Date(),
          archived: false,
        },
      ];
    });
  };

  const deleteNoteHandler = (id) => {
    setNotesData((prevState) => {
      return prevState.filter((note) => note.id !== id);
    });
  };

  const archiveNoteHandler = (id) => {
    setNotesData((prevState) => {
      return prevState.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      });
    });
  };

  const searchNoteHandler = (searchInput) => {
    setSearchNote(searchInput);
  };

  return (
    <>
      <Header />
      <div className="container px-5">
        <FormInput onAddNote={addNoteHandler} />
        <SearchBar onSearchNote={searchNoteHandler} />
        <NoteList
          onDeleteNote={deleteNoteHandler}
          onArchiveNote={archiveNoteHandler}
          notesData={notesData}
          searchNote={searchNote}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
