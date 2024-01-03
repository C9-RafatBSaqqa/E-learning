const mongoose = require('mongoose')

 mongoose.connect(process.env.db_connection)
 .then(console.log('ready to use')
 ).catch((err) => {
    console.log(err);
 })

