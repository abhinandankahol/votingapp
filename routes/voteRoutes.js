const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Candidate = require('../models/candiadateModel')
const Question = require('../models/votingquestion');

router.post('/', async (req, res) => {

    try {
        const { userId, candidateId,questionId } = req.body
        const user = await User.findOne({ userId });

        // Check if user has already voted
      if(!user){
       return res.status(500).send('User not exists')
      }

        const candidate = await Candidate.findOne({candidateId});

        if (!candidate) {
            return res.status(500).send('Candidate doesnot exixts')
        }
        
        const question = await Question.findOne({questionId });
        if (!question) {
            return res.status(500).send('Question does not exist');
        }

        if (user.votedQuestions.includes(questionId)) {
            return res.status(500).send('User has already voted for this question')
  
          }

        candidate.voteCount++

        user.votedQuestions.push(questionId);
        user.hasvoted = true

        // save changes

        await candidate.save()
        await user.save()
        res.status(200).send('Vote Cast Successfully')
    }
    catch(err){
    
        res.status(500).send('Error casting vote');
        console.log(err)
    }



    })

    module.exports = router

    