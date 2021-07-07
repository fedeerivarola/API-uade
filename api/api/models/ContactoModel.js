var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactoSchema = new Schema({
    nombre:String,
    domicilio: String,
    cumpleaños: Number,
    dni: String,
    mail: String
});

var Contactos = mongoose.model('Contacto', contactoSchema);
console.log("se creo modelo");
module.exports = Contactos;