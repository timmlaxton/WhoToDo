const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false}))

app.get('/', (req, res) => res.send('API Running '))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/todos', require('./routes/api/todos'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));