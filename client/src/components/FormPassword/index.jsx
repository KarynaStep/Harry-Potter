import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormAddCard from '../FormAddCard';
import { passwordSchema } from '../../utils/validationSchemas';
import styles from './FormPassword.module.scss';

const initialValuesForPassword = {
  password: '',
};



const FormPassword = () => {
  const [windowPassword, setWindowPassword] = useState(true);

  const submitForPassword = (values, formikBag) => {
    const password = process.env.REACT_APP_ADMINISTRATOR_PASSWORD;
    if (values.password === password) {
      setWindowPassword(!windowPassword);
    };
    
  };

  return (
    <section className={styles.container}>
      {windowPassword && <Formik
        initialValues={initialValuesForPassword}
        onSubmit={submitForPassword}
        validationSchema={passwordSchema}
      >
        <Form  className={styles.form}>
          <label>
            <span>Password:</span>
            <Field name="password" />
            <ErrorMessage name="password" />
          </label>
          <button className={styles.btn_send} type="submit">
            send
          </button>
        </Form>
      </Formik>}
      {!windowPassword && <FormAddCard />}
      </section>
  );
};

export default FormPassword;
