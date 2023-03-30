import React, { useEffect, useRef, useState } from 'react';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef(searchText);

  useEffect(() => {
    searchRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    const savedText = localStorage.getItem('search');
    if (savedText) {
      setSearchText(savedText);
    }

    return () => {
      localStorage.setItem('search', searchRef.current);
    };
  }, []);

  return (
    <div className="search">
      <input type="submit" value="" className="search__submit-btn" />
      <input
        type="search"
        value={searchText}
        className="search__search-bar"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
