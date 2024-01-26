const _ = require('lodash');
const multer = require('multer');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand
} = require('@aws-sdk/client-s3');
const dotenv = require('dotenv');
const createError = require('http-errors');
const { Card } = require('../models');



dotenv.config();



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
  region: bucketRegion
});

const attrs = ['name', 'picture', 'description', 'isProDeck'];

module.exports.createCard = async (req, res, next) => {
  try {
    const { body, file } = req;
    const values = _.pick(body, attrs);
    if (file) {
      values.picture = file.originalname;
    }
    const createdCard = await Card.create(values);
    if (!createdCard) {
      return next(createError(400, 'Card not created'));
    }

    const params = {
      Bucket: bucketName,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    
    const command = new PutObjectCommand(params);

    await s3.send(command)

    res.status(201).send({ data: createdCard });
  } catch (error) {
    next(error);
  }
};

module.exports.getCard = async (req, res, next) => {
  try {
    const { cardInstance } = req;

    const getObjectParams = {
      Bucket: bucketName,
      Key: cardInstance.picture,
    };
  
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    cardInstance.picture = url;

    res.status(200).send({ data: cardInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getCardsNotPro = async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      where: {
        isProDeck: false,
      },
      attributes: {
        exclude: [
          'name',
          'picture',
          'description',
          'isProDeck',
          'createdAt',
          'updatedAt',
        ],
      },
    });
    const idCards = [];
    cards.forEach((card) => idCards.push(card.id));

    if (cards.length === 0) {
      return res.status(204).send({ data: 'Card list is empty' });
    }

    res.status(200).send({ data: idCards });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCard = async (req, res, next) => {
  try {
    const { body, cardInstance, file } = req;
    const values = _.pick(body, attrs);
    if (file) {
      values.picture = file.originalname;

      const params = {
        Bucket: bucketName,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);

      await s3.send(command);

    }
    const updatedCard = await cardInstance.update(values);
    if (!updatedCard) {
      return next(createError(404, 'Card not updated'));
    }

    
    return res.status(200).send({ data: updatedCard });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCard = async (req, res, next) => {
  try {
    const { cardInstance } = req;
    const result = await cardInstance.destroy();

    const delObjectParams = {
      Bucket: bucketName,
      Key: cardInstance.picture,
    };

    const command = new DeleteObjectCommand(delObjectParams);
    await s3.send(command);

    return res.status(200).send({ data: cardInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getCardPro = async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      attributes: {
        exclude: [
          'name',
          'picture',
          'description',
          'isProDeck',
          'createdAt',
          'updatedAt',
        ],
      },
    });
    const idCardsPro = [];
    cards.forEach((card) => idCardsPro.push(card.id));
    if (cards.length === 0) {
      return res.status(204).send({ data: 'Card list is empty' });
    }
    res.status(200).send({ data: idCardsPro });
  } catch (error) {
    next(error);
  }
};
