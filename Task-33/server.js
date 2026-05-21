const http = require('http');
const fs = require("fs");
const path = require("path");


const app = http.createServer((req, res) => {
    const { method, url } = req
    if (req.url === "/Home.css") {

        const cssPath = path.join(__dirname, "Home.css");

        fs.readFile(cssPath, (err, data) => {

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);

        });

    }

    
    else if (req.url === "/image.png") {
        const imagePath = path.join(__dirname, "image.png");
        fs.readFile(imagePath, (err, data) => {
            res.writeHead(200, {
                "Content-Type": "image/png"
            });

            res.end(data);

        });

    }
    else if (url === '/') {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {
                'Content-Type': "text/html"
            });
            res.write(data);

            res.end();
        })
    } else if (url === '/contact') {
        fs.readFile("Contact.html", (err, data) => {
            res.writeHead(200, {
                'Content-Type': "text/html"
            });
            res.write(data);

            res.end();
        })

    } else if(url==='/about'){
        fs.readFile("About.html",(err,data)=>{
            res.writeHead(200,{
                "Content-Type":"text/html"
            });
            res.write(data)
            res.end()
        })

    }else if(url==='/service'){
        fs.readFile("service.html",(err,data)=>{
            res.writeHead(200,{
                "Content-Type":"text/html"
            });
            res.write(data)
            res.end()
        })

    }else{
        res.writeHead(404,{
            'Content-Type':"text/plain"
        })
        res.end('page not found')
    }
})

const port = 3000;

app.listen({ port }, () => {
    console.log(`server is running on http://localhost:${port}`);
})