import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendUsersByRoom, updateOneUser } from '../../store/usersSlice';
import styles from './RoomForGame.module.scss';
import { getRandomInt } from '../../utils/randomNumbers';
import CONSTANTS from '../../constants';
import { getRoomByName } from '../../store/roomsSlice';

const RoomForGame = () => {
  const { users, error, isFetching, userAuth } = useSelector(
    (state) => state.users
  );
  const { errorRoom, isFetchingRoom, room } = useSelector(
    (state) => state.rooms
  );
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let deck = CONSTANTS.ARRAY_CARDS.CARDS;
  let maxValueForRandom = CONSTANTS.ARRAY_CARDS.CARDS.length;

  if (
    !CONSTANTS.ARRAY_CARDS.CARDS.length ||
    !CONSTANTS.ARRAY_CARDS.CARDS_PRO.length
  ) {
    for (let index = 1; index <= CONSTANTS.MAX_VALUE_CARDS; index++) {
      CONSTANTS.ARRAY_CARDS.CARDS.push(index);
    }
    for (let index = 1; index <= CONSTANTS.MAX_VALUE_CARDS_PRO; index++) {
      CONSTANTS.ARRAY_CARDS.CARDS_PRO.push(index);
    }
  }

  const nameRoomInLS = localStorage
    .getItem('nameRoom')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');
  const nameUserInLS = localStorage
    .getItem('nameUser')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');

  useEffect(() => {
    dispatch(sendUsersByRoom({ nameRoom: nameRoomInLS }));
    dispatch(getRoomByName({ name: nameRoomInLS }));
  }, [dispatch, userAuth]);

  useEffect(() => {
    const renderUser = () => {
      dispatch(sendUsersByRoom({ nameRoom: nameRoomInLS }));
      console.log('renderUser');
    };
    if (users) {
      const timerId = setInterval(renderUser, 12000);
      setTimeout(() => clearInterval(timerId), 30000);
    }
  }, []);

  const changeIdUser = (users) => {
    const idCardInRoom = [];
    if (room.proDeck) {
      maxValueForRandom = CONSTANTS.ARRAY_CARDS.CARDS_PRO.length;
      deck = CONSTANTS.ARRAY_CARDS.CARDS_PRO;
    }
    let randomNumbers = getRandomInt(0, maxValueForRandom);
    let idCard = CONSTANTS.ARRAY_CARDS.CARDS_PRO[randomNumbers];

    users.forEach((user) => {
      if (idCardInRoom.includes(user.idCard)) {
        while (idCardInRoom.includes(idCard)) {
          randomNumbers = getRandomInt(0, maxValueForRandom);
          idCard = CONSTANTS.ARRAY_CARDS.CARDS_PRO[randomNumbers];
        }
        dispatch(updateOneUser([user.id, { idCard: idCard }]));
      }
      idCardInRoom.push(user.idCard);
      return;
    });

    users.forEach((user) => {
      const elemIndex = CONSTANTS.ARRAY_CARDS.CARDS_PRO.indexOf(user.idCard);
      if (elemIndex !== -1) {
        CONSTANTS.ARRAY_CARDS.CARDS_PRO.splice(elemIndex, 1);
      }
    });
  };

  const handelClickExit = () => navigate('/');

  const handelClick = (id) => {
    if (room.proDeck) {
      maxValueForRandom = CONSTANTS.ARRAY_CARDS.CARDS_PRO.length;
      deck = CONSTANTS.ARRAY_CARDS.CARDS_PRO;
    }
    
    let randomNumbers = getRandomInt(0, maxValueForRandom);
    let idCard = deck[randomNumbers];

    users.forEach((user) => {
      const elemIndex = deck.indexOf(user.idCard);
      if (elemIndex !== -1) {
        deck.splice(elemIndex, 1);
      }
    });
    

    dispatch(updateOneUser([id, { idCard: idCard }]));
  };

  const mapUsers = (user) => {
    if (user.nameUser === nameUserInLS) {
      return;
    }
    return (
      <div className={styles.card} key={user.id}>
        <h3>{user.nameUser}</h3>
        {user.Card['picture'] && (
          <img src={user.Card['picture']} alt={user.Card['name']} />
        )}
        <h3>{user.Card['name']}</h3>
        <p>{user.Card['description']}</p>
        <button onClick={() => handelClick(user.id)}>Змінити персонажа</button>
      </div>
    );
  };
  

  return (
    <section className={styles.container}>
      <h2>Кімната "{nameRoomInLS}"</h2>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {errorRoom && <p>{error}</p>}
      {isFetchingRoom && <p>Loading...</p>}
      {!errorRoom && !isFetchingRoom && room && users && changeIdUser(users)}
      {!error && !isFetching && users && (
        <article className={styles.container_for_cards}>
          {users.map(mapUsers)}
        </article>
      )}
      <button onClick={handelClickExit}>Вийти на головну</button>
    </section>
  );
};

export default RoomForGame;
