const mongoose =require('mongoose')
const {v4:uuidv4}= require('uuid')

const VotingQuestionSchema = new mongoose.Schema({
    questionId: { type: String, default: uuidv4, unique: true },
    vidhanSabhaId: { type: String, required: true },
    heading: { type: String, required: true },
    candidateIds: [{ type: String, required: true }]
})

const VotingQuestionModel = mongoose.model('Voting Question', VotingQuestionSchema)
module.exports = VotingQuestionModel