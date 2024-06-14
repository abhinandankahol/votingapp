
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid'); 

const CandidateSchema = new mongoose.Schema({
    candidateId:{type:String,default:uuidv4,unique:true},
    name: { type: String, required: true },
    partyName: { type: String, required: true },
    partySymbol: { type: String, required: true },
    age: { type: Number, required: true },
    voteCount: { type: Number, default: 0 }
});

const CandidateModel = mongoose.model('CandidateModel',CandidateSchema)

module.exports= CandidateModel