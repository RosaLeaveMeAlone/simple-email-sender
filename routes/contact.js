const { Router } = require('express');

const { check } = require('express-validator');

const {
    validateFields,
} = require('../middlewares');

const { contactPost, test } = require('../controllers/contact');

const router = Router();

router.post('/',
[
    check('message', 'Message is required').notEmpty(),
    validateFields
], //Validaciones
contactPost);

module.exports = router;