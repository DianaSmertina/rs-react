import React, { useState } from 'react';
import { SearchBar } from '../components/searchBar';
import { CardList } from '../components/mainCards/cards';
import { ModalCardInfo } from '../components/mainCards/modalCardInfo';

export function MainPage() {
  const [isModalActive, setIsModalActive] = useState({ isActive: false, id: 0 });

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
      <SearchBar />
      <CardList onClick={(cardId: number) => cardOnClick(cardId)} />
    </main>
  );
}
