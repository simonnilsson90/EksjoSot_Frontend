import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className="customInput">
                <CiSearch className="grayIcon  searchIcon" size={24} />
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for deepfake datasets" />
            </div>
        </div>
    );
}

export default SearchBar;
