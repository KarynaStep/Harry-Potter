const _ = require('lodash');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const {
  S3Client,
  GetObjectCommand,
} = require('@aws-sdk/client-s3');
const createError = require('http-errors');
const { Room, User, Card } = require('../models');
const { Op } = require('sequelize');
const attrs = ['nameUser', 'idCard', 'nameRoom'];

// const bucketName = process.env.BUCKET_NAME;
// const bucketRegion = process.env.BUCKET_REGION;
// const accessKey = process.env.ACCESS_KEY;
// const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const bucketName = 'hp-game';
const bucketRegion = 'eu-central-1';
const accessKey = 'AKIAVRUVSVTIR565TXV2';
const secretAccessKey = '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';

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});



module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);

    const card = await Card.findByPk(values.idCard);
    if (!card) {
      return next(createError(404, 'Card not found'));
    }

    const [room, created] = await Room.findOrCreate({
      where: { name: values.nameRoom },
      defaults: {
        standardDeck: true,
        proDeck: false,
      },
    });

    const user = await User.create(values);
    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(204).send({ data: 'User list is empty' });
    }
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.sendUsersByRoom = async (req, res, next) => {
  try {
    const { body } = req 
    const values = _.pick(body, attrs);

    const users = await User.findAll({
      where: { nameRoom: values.nameRoom },
      include:
        {
          model: Card,
        }
    });
    if (users.length === 0) {
      return res.status(204).send({ data: 'User list is empty' });
    }

    for (const user of users) {
      const getObjectParams = {
      Bucket: bucketName,
      Key: user.Card.picture,
    };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      user.Card.picture = url
    }
    
      res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const values = _.pick(body, attrs);

    if (values.idCard) {
      const card = await Card.findByPk(values.idCard);
      if (!card) {
        return next(createError(404, 'Card not found'));
      }
    }

    if (values.nameRoom) {
      const [room, created] = await Room.findOrCreate({
        where: { name: values.nameRoom },
        defaults: {
          standardDeck: true,
          proDeck: false,
        },
      });
    }

    const updatedUser = await userInstance.update(values);
    if (!updatedUser) {
      return next(createError(404, 'User not updated'));
    }
    return res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const date = new Date();
    const dateForDel = date.setHours(date.getHours() - 2);
    const delUser = await User.destroy({
      where: {
        updated_at: {
          [Op.lt]: dateForDel,
        },
      },
    });
    return res.status(200).send({ data: delUser });
  } catch (error) {
    next(error);
  }
};
