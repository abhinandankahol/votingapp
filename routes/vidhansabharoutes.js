const express = require('express')
const router = express.Router()
const Vidhansabha = require('../models/vidhansabha')

router.post('/', async (req, res) => {

    try {
        const { name } = req.body

        let existingVidhansabha =await  Vidhansabha.findOne({ name })
        if (existingVidhansabha) {
            return res.status(400).send('Vidhansabha already exists')
        }
        const VidhansabhaNew = new Vidhansabha({ name })
        await VidhansabhaNew.save()
        res.status(200).send('Vidhansabha Created Successfully')

    } catch (error) {
        res.status(404).send('Something wents wrong')

    }
})

router.get('/', async (req, res) => {
    try {
        const newVidhansabha = await Vidhansabha.find()
            res.status(200).send(newVidhansabha)

    } catch (error) {
        res.status(404).send('Failed to get data')


    }
})

module.exports  = router