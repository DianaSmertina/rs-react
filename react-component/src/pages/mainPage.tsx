import React, { useState } from 'react';
import { SearchBar } from '../components/searchBar';
import { CardList } from '../components/mainCards/cards';
import { ModalCardInfo } from '../components/mainCards/modalCardInfo';

export function MainPage() {
  const [searchText, setSearchText] = useState(localStorage.getItem('search') || '');
  const [isModalActive, setIsModalActive] = useState({ isActive: false, id: 0 });

  const mainHandleSubmit = (text: string) => {
    setSearchText(text);
  };

  const cardOnClick = (cardId: number) => {
    setIsModalActive({ isActive: true, id: cardId });
  };

  const closeModal = () => {
    setIsModalActive({ isActive: false, id: 0 });
  };

  return (
    <main>
      <h1>Main page</h1>
      {isModalActive.isActive && <ModalCardInfo id={isModalActive.id} onClick={closeModal} />}
      <SearchBar onSumbit={(text: string) => mainHandleSubmit(text)} />
      <CardList search={searchText} onClick={(cardId: number) => cardOnClick(cardId)} />
    </main>
  );
}
