import { showFormattedDate } from "../utils/data";
import Note from "./Note";

const NoteList = ({ notesData, searchNote, onDeleteNote, onArchiveNote }) => {
  const notes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchNote.toLowerCase())
  );
  const notArchivednotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <>
      <section className="my-4">
        <h3 className="mx-3 mt-4">Catatan</h3>
        {notArchivednotes.length === 0
          ? "Tidak Ada Catatan Disini..."
          : notArchivednotes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                date={showFormattedDate(note.createdAt)}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))}
      </section>
      <hr />
      <section className="my-4">
        <h3 className="mx-3 mt-4">Arsip Catatan</h3>
        {archivedNotes.length === 0
          ? "Tidak Ada Catatan Disini..."
          : archivedNotes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                date={showFormattedDate(note.createdAt)}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))}
      </section>
      <hr />
    </>
  );
};

export default NoteList;
