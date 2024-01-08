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
    setWindow(!window);
    return;
  };
  useEffect(() => {
    dispatch(getCards()); // eslint-disable-next-line
    dispatch(getCardsAllPro()); // eslint-disable-next-line
  }, []);

  CONSTANTS.CARDS = cards;
  CONSTANTS.CARDS_PRO = cardsPro;

  console.log(CONSTANTS.CARDS);
  console.log(CONSTANTS.CARDS_PRO);
  

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
