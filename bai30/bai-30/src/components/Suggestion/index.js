import { useState } from "react";
import "./Suggestions.scss";
function SearchSuggest() {
    const fakeData = [
        "react tutorial",
        "react hook useState",
        "react route dom",
        "javascript basic",
        "javascript array methods",
        "youtube clone react",
        "html css responsive",
        "nodejs express tutorial",
        "mongodb atlas setup",
        "tailwind css tutorial",
    ];

    const [keyword, setKeyword] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setKeyword(value);

        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const result = fakeData
            .filter((item) => item.toLowerCase().includes(value))
            .slice(0, 5);

        setSuggestions(result);
    };

    const handleSelect = (item) => {
        setKeyword(item);
        setSuggestions([]);
    };
    return (
        <>
            <div className="suggestion">
                <input
                type="text"
                placeholder="Tìm kiếm"
                onChange={handleChange}
                value={keyword}
                className="suggestion__input"
            ></input>
            {suggestions.length > 0 && (
                <ul className="suggestion__list">
                    {suggestions.map((item, index) => (
                        <li key={index} className="suggestion__item" onClick={() => handleSelect(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </>
    );
}

export default SearchSuggest;
