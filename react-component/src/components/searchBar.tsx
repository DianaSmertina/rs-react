import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../redux/searchSlice';
import type { RootState } from '../redux/store';

export function SearchBar() {
  const [currentText, setCurrentText] = useState('');
  const searchRef = useRef(currentText);
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.searchText);

  useEffect(() => {
    searchRef.current = currentText;
  }, [currentText]);

  useEffect(() => {
    if (searchText) {
      setCurrentText(searchText);
    }
  }, [searchText]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchText(currentText));
  };

  return (
    <form
      className="search"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      onReset={() => {
        setCurrentText('');
        dispatch(setSearchText(''));
      }}
    >
      <input type="submit" value="" className="btn submit-btn" />
      <input
        type="search"
        value={currentText}
        className="search__search-bar"
        onChange={(e) => setCurrentText(e.target.value)}
        placeholder="Enter character's name"
      />
      <input type="reset" data-testid="search-reset" value="" className="btn reset-btn" />
    </form>
  );
}
