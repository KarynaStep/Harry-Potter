import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistrationWindow from '../RegistrationWindow';
import { getCardsAllPro, getCards } from '../../store/cardsSlice';
import CONSTANTS from '../../constants';
import styles from './Home.module.scss';

const Home = () => {
  const [window, setWindow] = useState(false);
  const dispatch = useDispatch();
  const { cards, cardsPro } = useSelector((store) => store.cards);

  const handelClick = () => {
    setWindow(!window)
    writeConstantCard()
    return
  };
  useEffect(() => {
    dispatch(getCards()); // eslint-disable-next-line
    dispatch(getCardsAllPro()); // eslint-disable-next-line
  }, []);

  const writeConstantCard = () => {
    cards.forEach((card) => CONSTANTS.CARDS.push(card.id));
    cardsPro.forEach((cardPro) => CONSTANTS.CARDS_PRO.push(cardPro.id));
    return
  };
  
  return (
    <section className={styles.container}>
      {!window && (
        <>
          <h1>Ласкаво просимо, поціновувач Гаррі Поттера</h1>
          <h2>Ця гра "Хто я?" у світі Гаррі Поттера</h2>
        </>
      )}
      <button className={styles.btn_entry} onClick={handelClick}>
        Войти в игру
      </button>
      {window && <RegistrationWindow window={window} setWindow={setWindow} />}
    </section>
  );
};

export default Home;
