const SearchBar = ({ onSearchNote }) => {
  return (
    <>
      <hr />
      <h4 className="mt-4">Cari Catatan</h4>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Berdasarkan judul"
        onChange={(event) => onSearchNote(event.target.value)}
      />
    </>
  );
};

export default SearchBar;
