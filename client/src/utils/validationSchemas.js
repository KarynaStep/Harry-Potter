import * as Yup from 'yup';

const schemaName = Yup.string()
  .trim()
  .matches(/^[a-zа-яёїієґ0-9]{2,63}$/gi, 'length 2..64')
  .required('required');

export const roomSchema = Yup.object({
  nameRoom: schemaName,
  nameUser: schemaName,
  standardDeck: Yup.boolean('must be boolean'),
  proDeck: Yup.boolean('must be boolean'),
});

export const cardSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^.{2,63}$/gi, 'length 2..64')
    .required('required'),
  picture: Yup.string().required('required'),
  description: Yup.string()
    .trim()
    .matches(/^.{2,500}$/gi, 'length 2..500'),
  isProDeck: Yup.boolean('must be boolean'),
});

export const passwordSchema = Yup.object({
  password: Yup.string()
    .trim()
    .matches(/^.{2,63}$/gi, 'length 2..64')
    .required('required'),
});

