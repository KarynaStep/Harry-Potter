import React, { useState } from 'react';
// import cron from 'node-cron';
// import { converter } from 'react-js-cron';
// import { useDispatch } from 'react-redux';
import RegistrationWindow from '../RegistrationWindow';
import styles from './Home.module.scss';
// import { delRooms } from '../../store/roomsSlice';


const Home = () => {
  const [window, setWindow] = useState(false);
    // const dispatch = useDispatch();

  const handelClick = () => {
    setWindow(!window);
    return;
  };
  

  // cron.schedule(
  //   '45 3 * * *',
  //   () => {
  //     dispatch(delRooms());
  //     dispatch(delRooms());
  //   }
  // );

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
