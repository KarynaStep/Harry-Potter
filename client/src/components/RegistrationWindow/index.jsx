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

  const submit = (values, formikBag) => {
    CONSTANTS.MAX_VALUE_FOR_RANDOM = CONSTANTS.MAX_VALUE_CARDS;
    let idCard = getRandomInt(1, CONSTANTS.MAX_VALUE_FOR_RANDOM);

    const roomNew = {
      name: values.nameRoom,
      standardDeck: values.standardDeck,
      proDeck: values.proDeck,
    };
    dispatch(addRoom(roomNew));

    if (roomNew.proDeck) {
      CONSTANTS.MAX_VALUE_FOR_RANDOM = CONSTANTS.MAX_VALUE_CARDS_PRO;
      idCard = getRandomInt(0, CONSTANTS.MAX_VALUE_FOR_RANDOM);
    }
    if (!idCard) {
      idCard = getRandomInt(1, CONSTANTS.MAX_VALUE_FOR_RANDOM);
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
