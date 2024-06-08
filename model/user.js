const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['female', 'male']
    },
    city: {
        type: String,
        enum: ['Algiers', 'Blida','Oran','Constantine','Annaba','Batna','Sétif','Sidi Bel Abbès','Biskra','Tébessa','El Oued','Skikda','Tiaret','Béjaïa','Tlemcen','Ouargla','Béchar','Mostaganem','Bordj Bou Arréridj','Chlef','Souk Ahras','Djelfa','Médéa','Guelma','Relizane','Aïn Defla','Mascara','El Tarf','Tizi Ouzou','Saïda','Aïn Témouchent','Ghardaïa','Laghouat','Naâma','Mila','Oum El Bouaghi','Khenchela','Sétif','Tipaza','Tissemsilt','El Bayadh','Adrar','Illizi','Tamanrasset','Tindouf','El M\'ghair','El Menia','Ouled Djellal','Bir El Ater','Bordj Baji Mokhtar','Bordj Omar Driss'],
    },
    phoneNumber: String,
    Email: String,
    password: String,
});

module.exports = model('User', userSchema);
