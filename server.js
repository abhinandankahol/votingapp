const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser'); // Corrected import name
const authRoutes = require('./routes/auth');
const candidateRoutes = require('./routes/candidate')
const VoteRoutes = require('./routes/voteRoutes')
const Vidhansabha = require('./routes/vidhansabharoutes')
const QuestionRoutes = require('./routes/question')

app.use(express.json());
app.use(bodyParser.json()); // Corrected middleware usage

app.use('/auth', authRoutes); // Fixed path prefix for authRoutes
app.use('/candidateauth', candidateRoutes)
app.use('/castvote', VoteRoutes)
app.use('/vidhansabha', Vidhansabha)
app.use('/question', QuestionRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


