const mongoose = require('mongoose');

const URI = `mongodb+srv://nosnart:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.040fp.mongodb.net/<dbname>?retryWrites=true&w=majority`

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true ,
  useFindAndModify: false
}

const initClient = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(URI, options)
      .then(db => resolve({ message: 'Connected to MongoDB' }))
      .catch(error => reject(`MongoDB not connected`, error))
  })
}

module.exports = {
  initClient
}
