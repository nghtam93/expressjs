var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const moment = require('moment');
const {check, validationResult} = require('express-validator');
// const {validate} = require('../path/validator');

const validator = [
  check('cls_name').exists().withMessage('Invalid does not Empty!')
      .notEmpty().withMessage('Invalid does not Empty!')
      .isLength({min:3}).withMessage('User name must be minimum 3 character!')
      .isLength({max:100}).withMessage('User name must be maximum 100 character!'),

  check('cls_position').exists().withMessage('Invalid does not Empty!')
]

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

router.use(cookieParser());
router.use(flash());


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
});

router.use(session({
  secret: '123456catr',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Add item clients in database
router.post('/add', validator, function (req, res, next) {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    req.flash('error', result.errors[0].msg);
    res.redirect('/items/add');
  } else {
    const {cls_name, cls_position, cls_office, cls_age, cls_date, cls_salary} = req.body;
    const sql = `INSERT INTO clients (cls_name, cls_position, cls_office, cls_age, cls_date, cls_salary) VALUES ("${cls_name}", "${cls_position}", "${cls_office}", "${cls_age}", "${cls_date}", "${cls_salary}")`;
    con.query(sql, function(err, result) {
      if (err) throw err;
      res.redirect('/items/list');
    });
  }
});

// Edit item clients in database
router.get('/edit', function (req, res) {
  const id = req.query.id;
  const sql = `SELECT * FROM clients where id = '${id}'`;
  con.query(sql, function (err, data, fields) {
    Object.keys(data).forEach(function(key) {
      const row = data[key];
      const cls_date = moment(new Date(row.cls_date)).format("YYYY-MM-DD");
      data[key] = { ...row, cls_date }
    });
    res.render('pages/items/edit', {
      posts: data,
      title: 'Edit Item'
    });
  });
})

router.post('/edit', function (req, res) {
  const params = req.body;
  const sql = `update clients set cls_name = '${params.cls_name}', cls_position = '${params.cls_position}', cls_office = '${params.cls_office}', cls_age = '${params.cls_age}', cls_date = '${params.cls_date}', cls_salary = '${params.cls_salary}' where id = ${params.cls_id};`;
  con.query(sql, function (err, result) {
    if (err)    console.log(err);
    console.log("1 record update");
  });
  res.redirect('/items/list');
});


// Delete item clients in database
router.get('/delete', function (req, res) {
  const id = parseInt(req.query.id);
  const sql = `Delete FROM clients where id = ${id}`;
  con.query(sql, function (err, data, fields) {});
  res.redirect('/items/list');
})

// Get database list clients
router.get('/list', function (req, res) {
  const sql = "SELECT * FROM clients";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.render('pages/items/list',{listMember:results, title: 'List Page'});
  });
});

router.get('/add', function(req, res, next) {
  let error = req.flash('error');
  res.render('pages/items/add', { title: 'Add Item', error: error });
});


module.exports = router;
