const { celebrate, Joi } = require('celebrate')
Joi.objectId = require('joi-objectid')(Joi)

const urlrRegex = require('../utils/constants')

const errCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
    avatar: Joi.string().regex(urlrRegex),
    location: Joi.string(),
    about: Joi.string(),
  }),
})

const errLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
})

const errUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),

    name: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(urlrRegex),
    location: Joi.string(),
    about: Joi.string(),
  }),
})

const errCreatePost = celebrate({
  body: Joi.object().keys({
    image: Joi.string().regex(urlrRegex),
    video: Joi.string().regex(urlrRegex),
    description: Joi.string().min(2).max(30).required(),
  }),
})

const errPostId = celebrate({
  params: Joi.object().keys({
    postId: Joi.objectId(),
  }),
})
module.exports = {
  errCreateUser,
  errLogin,
  errUpdateUser,
  errCreatePost,
  errPostId,
}
