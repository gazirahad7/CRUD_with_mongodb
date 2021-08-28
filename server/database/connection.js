const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // mongodb connection url
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`MongdoDB connected ${conn.connection.host}`);
    
  } catch (err) {
    console.log('error', err);
    process.exit(1)
    
    
  }
}
module.exports = connectDB