const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    const q = url.parse(req.url,true);
    const filename = "."+ (q.pathname==="/"? "/index" : q.pathname) + ".html";

    console.log("Requested URL:", req.url);
    console.log("Resolved filename:", filename);

    fs.readFile(filename, (err,data) => {
        console.log(filename);
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("Error 404! Page not found.");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);

// const port = 8080;

// server.listen(port, ()=>{
//     console.log(`Server running at: http://localhost:${port}`);
// })