import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleInputChanged = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    if (keyword.trim() === "") {
      console.log("Keyword is empty");
      return;
    }
    navigate(`/search/${encodeURIComponent(keyword)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div
      id="search-bar"
      className="flex h-full w-1/3 items-center justify-center"
    >
      <input
        type="text"
        className="h-2/5 w-2/3 rounded-s-lg px-5 py-1 outline-none"
        placeholder="Search here"
        value={keyword}
        onChange={handleInputChanged}
        onKeyDown={handleKeyDown}
      />
      <button
        className="h-2/5 w-10 rounded-e-lg bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
        onClick={handleSearch}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;
