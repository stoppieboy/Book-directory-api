const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log('database connected')).catch(e=>console.log(e));
}

module.exports = connect;