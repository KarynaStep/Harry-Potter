import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendUsersByRoom, updateOneUser } from '../../store/usersSlice';
import styles from './RoomForGame.module.scss';
import { getRandomInt } from '../../utils/randomNumbers';
import CONSTANTS from '../../constants';

const RoomForGame = () => {
  const { users, error, isFetching, userAuth } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRoomInLS = localStorage
    .getItem('nameRoom')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');
  const nameUserInLS = localStorage
    .getItem('nameUser')
    .replace(/[^a-zа-яёїієґ0-9]/gi, '');

  useEffect(() => {
    dispatch(sendUsersByRoom({ nameRoom: nameRoomInLS })); // eslint-disable-next-line
  }, [dispatch, userAuth]);

  const handelClickExit = () => navigate('/');

  const handelClick = (id) => {
    let idCard = getRandomInt(1, CONSTANTS.MAX_VALUE);

    const idCardInRoom = [];
    users.forEach((user) => {
      idCardInRoom.push(user.idCard);
    });
    while (idCardInRoom.includes(idCard)) {
      idCard = getRandomInt(1, CONSTANTS.MAX_VALUE);
    }
    console.log(idCardInRoom);
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

  console.log(users);
  

  return (
    <section className={styles.container}>
      <h2>Кімната "{nameRoomInLS}"</h2>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
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
