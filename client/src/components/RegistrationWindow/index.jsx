import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { roomSchema } from '../../utils/validationSchemas';
import { getRandomInt } from '../../utils/randomNumbers';
import { addUser } from '../../store/usersSlice';
import { addRoom } from '../../store/roomsSlice';
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

  const submit = (values, formikBag) => {
    const roomNew = {
      name: values.nameRoom,
      standardDeck: values.standardDeck,
      proDeck: values.proDeck,
    };
    console.log(roomNew);
    dispatch(addRoom(roomNew));

    if (roomNew.proDeck) {
      maxValueForRandom = CONSTANTS.ARRAY_CARDS.CARDS_PRO.length;
      deck = CONSTANTS.ARRAY_CARDS.CARDS_PRO;
    }

    let randomNumbers = getRandomInt(0, maxValueForRandom);
    let idCard = deck[randomNumbers];

    const user = {
      nameUser: values.nameUser,
      idCard: idCard,
      nameRoom: values.nameRoom,
    };
    console.log(user);
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
