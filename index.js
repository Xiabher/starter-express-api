const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// New Route for Greeting
app.post('/greet', express.json(), (req, res) => {
    const { name } = req.body;
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    res.json({ message: greeting });
});

app.listen(process.env.PORT || 3000)