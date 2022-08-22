const Note = ({
  id,
  title,
  body,
  archived,
  date,
  onDeleteNote,
  onArchiveNote,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="card mt-3" style={{ width: "100%" }}>
        <div className="card-body">
          <h5>{title}</h5>
          <span className="badge bg-light text-dark my-2">{date}</span>
          <p className="card-text">{body}</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-success mx-2 "
          onClick={() => onArchiveNote(id)}
        >
          {!archived ? "Arsipkan" : "Pindahkan"}
        </button>
        <button
          className="btn btn-danger mx-2 "
          onClick={() => onDeleteNote(id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Note;
