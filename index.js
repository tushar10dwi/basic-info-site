// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req,res)=>{
//     const q = url.parse(req.url,true);
//     const filename = "."+ (q.pathname==="/"? "/index" : q.pathname) + ".html";

//     console.log("Requested URL:", req.url);
//     console.log("Resolved filename:", filename);

//     fs.readFile(filename, (err,data) => {
//         console.log(filename);
//         if(err) {
//             res.writeHead(404, {'Content-Type':'text/html'});
//             return res.end("Error 404! Page not found.");
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);

// const port = 8080;

// server.listen(port, ()=>{
//     console.log(`Server running at: http://localhost:${port}`);
// })

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/contact-me', (req,res) => {
    res.sendFile(path.join(__dirname,'contact-me.html'));
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});


app.listen(8080);