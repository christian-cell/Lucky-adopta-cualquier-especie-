const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema principal
const datosMascotaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    sexo: { type: String, required: true },
    ciudad: { type: String, required: true },
    especie: { type: String, required: true },
    // Añadido tipo que seria com la raza dentro de la especie EJ ---> especie: perro, tipo: pastor Aleman
    tipo: { type: String, required: true },
    historia: { type: String, required: true },
    fechaDeNacimiento: { type: Date, default: Date.now() },
    tamaño: { type: String, required: true },
    personalidad: { type: String, required: true },
    peso: { type: Number, required: true },
    direccion: { type: String, required: true },
    lat:{type:Number, required:true},
    long:{type:Number, required:true},
    img: { type: String, required: false },

    
    // salud: {
      esterilizado : { type: String , required: true },
      vacunado : { type: String , required : true },
      desparasitado : { type: String , required : true },
      identificado : { type : String , required : true},
      microchip: { type: String , required : true },
      sano : { type: String , required : true },
    // },
    
    // adopcion: {
      tasas: { type: Number, required: true },
      queCiudad: { type: String, required: true },
    // }
  // },
  // {
    requisitos: { type: String, required: true }
    // timestamps: false,
   }
);

/* 
"sexo":"hembra",
"especie":"periquito", 
"historia":"fue recogido en la calle",
"fecheDeNacimiento": 2020-09-17,
"tamaño":"quince por veinte cm",
"peso":230
*/

const DatosMascota = mongoose.model('DatosMascotas', datosMascotaSchema);
module.exports = DatosMascota;

