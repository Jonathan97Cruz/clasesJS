const mongoose = require('mongoose');
//Creando un modelo u objeto para hacer una peticion get
const Users = mongoose.model('User', {
    name: {type: String, required:true},
    lastname: {type: String, required : true},
})
module.exports = Users;