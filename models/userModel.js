const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid'); 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    aadharnumber: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    hasvoted: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
         default: uuidv4,
        unique: true
    },
    votedQuestions: [{
        type: String, 
        required: true,
        unique: true
    }]
    
});

userSchema.pre('save', async function(next) {
    try {
     
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }

        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password)
        return isMatch
    } catch (error) {
        
    }
}

const UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
