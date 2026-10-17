require("dotenv").config();
const express = require('express'); 
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;  


app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}-${new Date()}`);
    next();
});


 app.get('/', (req, res) => {
   
    res.send("My Week 2 API");
});
app.post('/user', (req, res) => {
    res.send(`Hello, ${req.body.name}!`);
});
app.get('/user/:id', (req, res) => {
    req.params.id;
    res.send(`User ${req.params.id} profile`);
});

app.listen(PORT, () => {
  
  console.log(`Server is listening running on http://localhost:${PORT}`); // Log a message when the server starts
});