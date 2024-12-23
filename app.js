// amit-ofeck-322317306-ortal-ben-david-209898907
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, Express with Local MongoDB!');
});

const MONGO_URI = "mongodb://localhost:27017/assignment1";

mongoose.connect(MONGO_URI, { dbName: 'assignment1', useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB locally');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use('/post', postRoutes);
app.use('/comment', commentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
