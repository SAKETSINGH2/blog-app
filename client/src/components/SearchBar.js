const SearchBar = ({ setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;
