const express = require('express')
const router = express.Router()
const Question = require('../models/votingquestion')


router.post('/', async (req, res) => {
    try {
        const { vidhanSabhaId, heading, candidateIds } = req.body
        const VotingQuestion = new Question({
            vidhanSabhaId, heading, candidateIds
        })

        await VotingQuestion.save()

        res.status(200).send('Question Created Successfull')

    } catch (error) {
        res.status(404).send('Something wents wrong')

    }
})

router.get('/', async function (req, res) {
    try {
        const question = await Question.find()
        res.status(200).send(question)

    } catch (error) {

        res.status(404).send('Fialed to fetch Data')

    }
})
module.exports = router