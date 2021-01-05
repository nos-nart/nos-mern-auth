require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoDB = require('./services/db.service');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT;

class Server {
  init() {
    server.disabled('x-powered-by');
    server.use(cors());
    server.use(express.json({ limit: '10mb' }));
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    this.serverRoutes();
  }

  serverRoutes() {
    const AuthRouterClass = require('./routes/auth.router');
    const AuthRouter = new AuthRouterClass();
    server.use('/api/auth', AuthRouter.init());

    this.launch();
  }

  launch() {
    mongoDB.initClient()
      .then(db => {
        console.log('db: ', db);
        server.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        })
      })
      .catch(err => console.log('err: ', err));
  }
}

new Server().init();
