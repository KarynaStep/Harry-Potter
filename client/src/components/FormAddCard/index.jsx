import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { cardSchema } from '../../utils/validationSchemas';
import styles from './FormAddCard.module.scss';
import { addCard } from '../../store/cardsSlice';

const initialValuesForCard = {
  name: '',
  picture: '',
  description: '',
  isProDeck: false,
};

const FormAddCard = () => {
  const dispatch = useDispatch();

  const submitForCard = (values, formikBag) => {
    dispatch(addCard(values));
    formikBag.resetForm();
  };

  return (
      <section className={styles.container}>
        <Formik
          initialValues={initialValuesForCard}
          onSubmit={submitForCard}
          validationSchema={cardSchema}
        >
          {(formikProps) => {
            const handlePicture = ({ target }) => {
              formikProps.setFieldValue('picture', target.files[0]);
            };
            return (
              <Form encType="multipart/form-data" className={styles.form}>
                <h1>Add card</h1>
                <label>
                  <span>Name:</span>
                  <Field name="name" />
                  <ErrorMessage name="name" />
                </label>
                <label>
                  <span>Picture</span>
                  <input name="picture" type="file" onChange={handlePicture} />
                  <ErrorMessage name="picture" />
                </label>
                <label>
                  <span>Description:</span>
                  <Field name="description" />
                  <ErrorMessage name="description" />
                </label>
                <label>
                  <span>Профі колода:</span>
                  <Field type="checkbox" name="isProDeck" />
                  <ErrorMessage name="isProDeck" />
                </label>
                <button className={styles.btn_send} type="submit">
                  send
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
  );
};


export default FormAddCard;
