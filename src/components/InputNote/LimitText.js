const LimitText = ({ limit, max }) => {
  const limitText = max - limit.length;
  return (
    <div className="text-end">
      Sisa Karakter: {limitText ? limitText : <b>Sudah Maksimal</b>}
    </div>
  );
};

export default LimitText;
