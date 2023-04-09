import React, { FormEvent, useEffect, useRef, useState } from 'react';

export function SearchBar(props: { onSumbit: (text: string) => void }) {
  const [currentText, setCurrentText] = useState('');
  const searchRef = useRef(currentText);

  useEffect(() => {
    searchRef.current = currentText;
  }, [currentText]);

  useEffect(() => {
    const savedText = localStorage.getItem('search');
    if (savedText) {
      setCurrentText(savedText);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSumbit(currentText);
    localStorage.setItem('search', searchRef.current);
  };

  return (
    <form
      className="search"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      onReset={() => {
        localStorage.setItem('search', '');
        setCurrentText('');
        props.onSumbit('');
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
