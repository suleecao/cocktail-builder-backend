
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: String,
        hashedPassword: String, 
        favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail' }]  
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;