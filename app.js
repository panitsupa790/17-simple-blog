const express = require('express');
const app = express();
app.use(express.json());

app.get('/posts', (req, res) => {
    res.json([{ id: 1, title: 'First Post' }]);
});

app.get('/posts/:id', (req, res) => {
    res.json({ id: req.params.id, content: 'Lorem ipsum...' });
});

app.get('/posts/:id/comments', (req, res) => {
    res.json([{ id: 1, text: 'Nice post!' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
