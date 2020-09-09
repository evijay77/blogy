var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var signupSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
 
module.exports = mongoose.model('Signup', signupSchema);