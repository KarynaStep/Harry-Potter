import React, { useState } from 'react';

import RegistrationWindow from '../RegistrationWindow';
import styles from './Home.module.scss';

const Home = () => {
  const [window, setWindow] = useState(false);

  const handelClick = () => {
    setWindow(!window);
    return;
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
