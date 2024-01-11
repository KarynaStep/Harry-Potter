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
  const { errorRoom, isFetchingRoom, foundRoom } = useSelector(
    (state) => state.rooms
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let maxValueForRandom = CONSTANTS.MAX_VALUE_CARDS;

  const nameRoomInLS = localStorage
    .getItem('nameRoom')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');
  const nameUserInLS = localStorage
    .getItem('nameUser')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');

  const renderUser = () => {
    dispatch(sendUsersByRoom({ nameRoom: nameRoomInLS }));
    console.log('renderUser');
  };

  useEffect(() => {
    dispatch(sendUsersByRoom({ nameRoom: nameRoomInLS }));
    dispatch(getRoomByName({ name: nameRoomInLS }));
  }, [dispatch, userAuth]);
  useEffect(() => {
    const timerId = setInterval(renderUser, 10000);
    setTimeout(() => clearInterval(timerId), 90000);
  }, []);

  // const changeIdUser = (users) => {
  //   const idCardsInRoom = [];
  //   let idCard = getRandomInt(0, maxValueForRandom);
  //   if (foundRoom.proDeck) {
  //     maxValueForRandom = CONSTANTS.MAX_VALUE_CARDS_PRO;
  //   }
  //   const idCardInRoom = [];
  //   users.forEach((user) => {
  //     console.log('idCardInRoom', idCardInRoom);
  //     while (idCardInRoom.includes(user.idCard)) {
  //       idCard = getRandomInt(0, maxValueForRandom);
  //       console.log('repit');
  //       dispatch(updateOneUser([user.id, { idCard: idCard }]));
  //     }
  //     idCardsInRoom.push(user.idCard);
  //   });
  //   console.log('idCardInRoom in changeIdUser', idCardsInRoom);
  // arr.map((n, i, a) => a.indexOf(n) !== a.lastIndexOf(n));

  // console.log(idCard);

  // dispatch(updateOneUser([user, { idCard: idCard }]));
  // };

  const handelClickExit = () => navigate('/');

  const handelClick = (id) => {
    let idCard = getRandomInt(0, maxValueForRandom);
    if (foundRoom.proDeck) {
      maxValueForRandom = CONSTANTS.MAX_VALUE_CARDS_PRO;
    }
    const idCardInRoom = [];
    users.forEach((user) => {
      idCardInRoom.push(user.idCard);
    });
    while (idCardInRoom.includes(idCard)) {
      idCard = getRandomInt(0, maxValueForRandom);
    }
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
          <img
            src={`./images/heroes/${user.Card['picture']}`}
            alt={user.Card['name']}
          />
        )}
        <h3>{user.Card['name']}</h3>
        <p>{user.Card['description']}</p>
        <button onClick={() => handelClick(user.id)}>Змінити персонажа</button>
      </div>
    );
  };

  console.log('users', users);

  return (
    <section className={styles.container}>
      <h2>Кімната "{nameRoomInLS}"</h2>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {errorRoom && <p>{error}</p>}
      {isFetchingRoom && <p>Loading...</p>}
      {/* {!errorRoom &&
        !isFetchingRoom && foundRoom && changeIdUser(users)} */}
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
