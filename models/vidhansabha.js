const mongoose = require('mongoose')
const {v4:uuidv4} = require('uuid')


const vidhansabhaSchema = new mongoose.Schema({
    sabhaId:{
        type :String,
        default :uuidv4,
        unique:true
    },
    name: { type: String, required: true, unique: true }
})

const VidhansabhaModel =  mongoose.model('Vidhansabha',vidhansabhaSchema)

module.exports = VidhansabhaModel