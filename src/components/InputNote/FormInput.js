import { useState } from "react";
import LimitText from "./LimitText";

const FormInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    onAddNote(title, body);
  };

  const titleInputHandler = (event) => {
    const titleInput = event.target.value;
    if (titleInput.length > 50) {
      return;
    }
    setTitle(titleInput);
  };

  const bodyInputHandler = (event) => {
    const bodyInput = event.target.value;
    if (bodyInput.length > 500) {
      return;
    }
    setBody(bodyInput);
  };

  return (
    <>
      <h3 className="mx-3 mt-4">Buat Catatan Baru</h3>
      <form className="d-grid" onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <LimitText limit={title} max={50} />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Judul"
            value={title}
            onChange={titleInputHandler}
          />
          <textarea
            className="form-control"
            style={{ height: 300 }}
            placeholder="Isi Catatan"
            value={body}
            onChange={bodyInputHandler}
          />
          <LimitText limit={body} max={500} />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Buat
        </button>
        <button type="reset" className="btn btn-warning text-white">
          Reset
        </button>
      </form>
    </>
  );
};

export default FormInput;
