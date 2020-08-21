// step1
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// step2
app.get('/', (req, res) => {
    res.send('Hello from Server');
});
app.get('/api/user', (req, res) => {
    const userData = { id: 15, name: 'Guide' };
    res.send(userData);
});
// step3
app.listen(port, '127.0.0.1', () => {
    console.log(`Listen to request on port ${port}`);
});