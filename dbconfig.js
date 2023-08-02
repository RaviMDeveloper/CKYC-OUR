const mongoose = require('mongoose');

const conn = async () => {
  await mongoose.connect(

    process.env.MongoDbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then((response) => {
    try {
      console.log(`conneted to ${response.connection.host} `+`${response.connection.port}`);
    } catch (err) {
      console.log(err);
      console.log("could not connect to database");
    }
  
})};



module.exports ={conn};