const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 7071;
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});

app.get('/', (req, res) => {
  res.send('Hello to express server');
});
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log("Register API hit with data:", { name, email, password });
  
    try {
      const fsdata = await fs.readFile('student.json', { encoding: 'utf-8' });
      const arr = JSON.parse(fsdata);
      const result = arr.find(ele => ele.email === email);
  
      if (result) {
        return res.status(400).json({ message: "This email is already registered with us, please try another email id" });
      } else {
        arr.push({ name, email, password });
        await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
        res.json({ message: "/register API hit successfully" });
      }
    } catch (error) {
      console.error("Error in /register:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Login API hit with data:", { email, password });
  
    try {
      const fsdata = await fs.readFile('student.json', { encoding: 'utf-8' });
      const arr = JSON.parse(fsdata);
      const result = arr.find(ele => ele.email === email && ele.password === password);
  
      if (result) {
        res.json({ message: "success" });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } catch (error) {
      console.error("Error in /login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

app.delete('/data', (req, res) => { 
  console.log('Delete request received');
  res.send('Data deleted');
});

app.listen(port, () => {
  console.log(`Express app working on port ${port}`);
});