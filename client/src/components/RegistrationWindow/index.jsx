import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { roomSchema } from '../../utils/validationSchemas';
import { getRandomInt } from '../../utils/randomNumbers';
import { addUser, getUsers } from '../../store/usersSlice';
import { addRoom, getRooms } from '../../store/roomsSlice';
import styles from './RegistrationWindow.module.scss';
import CONSTANTS from '../../constants';

const initialValues = {
  nameRoom: '',
  nameUser: '',
  standardDeck: false,
  proDeck: false,
};

const RegistrationWindow = (props) => {
  const { window, setWindow } = props;
  const { rooms } = useSelector((store) => store.rooms);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRooms()); // eslint-disable-next-line
    dispatch(getUsers()); // eslint-disable-next-line
  }, []);

  const submit = (values, formikBag) => {
    let maxValueForRandom = CONSTANTS.CARDS.length;
    let idCard = CONSTANTS.CARDS[getRandomInt(1, maxValueForRandom)];

    if (rooms) {
      const room = rooms.find((room) => room.name === values.nameRoom);
      if (room) {
        if (room.proDeck) {
          maxValueForRandom = CONSTANTS.CARDS_PRO.length;
        }
        const usersInRoom = users.filter(
          (user) => user.nameRoom === values.nameRoom
        );
        const idCardsInRoom = [];
        usersInRoom.forEach((user) => {
          idCardsInRoom.push(user.idCard);
        });
        while (idCardsInRoom.includes(idCard)) {
          idCard = CONSTANTS.CARDS_PRO[getRandomInt(0, maxValueForRandom)];
        }
      } else {
        const roomNew = {
          name: values.nameRoom,
          standardDeck: values.standardDeck,
          proDeck: values.proDeck,
        };
        dispatch(addRoom(roomNew));
        if (roomNew.proDeck) {
          maxValueForRandom = CONSTANTS.CARDS_PRO.length;
          idCard = CONSTANTS.CARDS_PRO[getRandomInt(0, maxValueForRandom)];
        }
      }
    }

    if (!idCard) {
      idCard = CONSTANTS.CARDS[getRandomInt(1, maxValueForRandom)];
    }

    const user = {
      nameUser: values.nameUser,
      idCard: idCard,
      nameRoom: values.nameRoom,
    };

    dispatch(addUser(user));

    localStorage.setItem('nameUser', JSON.stringify(values.nameUser));
    localStorage.setItem('nameRoom', JSON.stringify(values.nameRoom));

    formikBag.resetForm();
    navigate('/room');
  };

  const handelClick = () => setWindow(!window);
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Увійти в кімнату</h2>
      <button onClick={handelClick} className={styles.btn_close}>
        Х
      </button>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={roomSchema}
      >
        <Form encType="multipart/form-data">
          <label>
            <span>Ім'я кімнати:</span>
            <Field name="nameRoom" />
            <ErrorMessage name="nameRoom" />
          </label>
          <label>
            <span>Ваше ім'я:</span>
            <Field name="nameUser" />
            <ErrorMessage name="nameUser" />
          </label>
          <label>
            <span>Стандартна колода:</span>
            <Field type="checkbox" name="standardDeck" />
            <ErrorMessage name="standardDeck" />
          </label>
          <label>
            <span>Профі колода:</span>
            <Field type="checkbox" name="proDeck" />
            <ErrorMessage name="proDeck" />
          </label>
          <button className={styles.btn_send} type="submit">
            Надіслати
          </button>
        </Form>
      </Formik>
    </article>
  );
};

export default RegistrationWindow;
