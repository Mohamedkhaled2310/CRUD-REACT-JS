export default function SearchBar({handleSearch}) {
  return (
    <div className="my-5 w-75 mx-auto">
      <input
        type="text"
        className="form-control"
        id="search-input"
        onChange={handleSearch}
        placeholder="search by product name.."
      />
    </div>
  );
}
