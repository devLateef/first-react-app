export const UserForm = ({ name, qty, good, setName, setQuant, setGud, addValue }) => {
  return (
    <div className="form">
      <input
        value={name}
        placeholder="Name of the page"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={qty}
        placeholder="Enter quantity"
        onChange={(e) => setQuant(e.target.value)}
      />
      <input
        value={good}
        placeholder="Name of the good"
        onChange={(e) => setGud(e.target.value)}
      />
      <button onClick={addValue}>Add Details</button>
    </div>
  );
};
