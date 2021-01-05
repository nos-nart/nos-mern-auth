const express = require('express');
const router = express.Router();
const passport = require('passport');

class AuthRouterClass {
  constructor() {}

  routes() {
    router.post('/login', (req, res) => {

    })

    router.post('/register', (req, res) => {

    })

    router.get('/logout')
  }

  init() {
    this.routes();
    return router;
  }
}

module.exports = AuthRouterClass;
