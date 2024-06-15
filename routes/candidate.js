const express = require('express')
const Candidate = require('../models/candiadateModel')
const router = express.Router()

router.post('/', async (req, res) => {

    try {
        const { name, partyName, partySymbol, age } = req.body

        let existingCandidate = await Candidate.findOne({ partyName, partySymbol })

        if (existingCandidate) {
            return(res.send('Candidate already exists'))
        
        }

        const candidate = new Candidate({
            name, partyName, partySymbol, age
        })

        await candidate.save()
        res.status(200).send('Candidate Listed Successfully')

    } catch (error) {
        res.status(500).send('Error adding candidate');
        console.log(error)

    }

})

router.get('/', async (req, res) => {
    try {
        // Fetch all candidates from the database
        const candidates = await Candidate.find();

        // Respond with the list of candidates
        res.status(200).json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching candidates');
    }
});

module.exports = router
