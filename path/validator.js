const {check} = require('express-validator');

let validateRegisterUser = () => {
    return [
        check('user.username', 'username does not Empty').not().isEmpty(),
        check('user.username', 'username must be Alphanumeric').isAlphanumeric(),
        check('user.username', 'username more than 6 degits').isLength({ min: 6 }),
        check('user.email', 'Invalid does not Empty').not().isEmpty(),
        check('user.email', 'Invalid email').isEmail(),
        check('user.birthday', 'Invalid birthday').isISO8601('yyyy-mm-dd'),
        check('user.password', 'password more than 6 degits').isLength({ min: 6 })
    ];
}

let validateLogin = () => {
    return [
        check('user.email', 'Invalid does not Empty').not().isEmpty(),
        check('user.email', 'Invalid email').isEmail(),
        check('user.password', 'password more than 6 degits').isLength({ min: 6 })
    ];
}

let validateAdd = () => {
    return [
        check('user.cls_name', 'Invalid does not Empty').not().isEmpty(),
        check('user.cls_position', 'Invalid does not Empty').not().isEmpty(),
        check('user.cls_office', 'Invalid does not Empty').not().isEmpty(),
        check('user.cls_age', 'password more than 1 degits').isLength({ min: 1 }),
        check('user.cls_date', 'Invalid does not Empty').not().isEmpty(),
        check('user.cls_salary', 'Invalid does not Empty').not().isEmpty()
    ];
}

let validate = {
    validateRegisterUser: validateRegisterUser,
    validateLogin: validateLogin,
    validateAdd: validateAdd
};

module.exports = {validate};
