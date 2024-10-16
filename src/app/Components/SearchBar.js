function SearchBar({ handleTextChange, handleSelectorChange }) {
  return (
    <div>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
              onChange={handleTextChange}
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              defaultValue={""}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
              onChange={handleSelectorChange}
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
