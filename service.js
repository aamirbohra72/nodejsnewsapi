const https = require('https')

const hostname = "localhost"
const port = 3000

const server = https.createServer((req, res) => {
    console.log(req.headers)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html> <body> <h1> Server connection success </h1> </body> </html>')
})
 

 
https
.get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-29&sortBy=publishedAt&apiKey=0b1a80852e2a4925ae73b7649a42b3e5" , resp => {
  let data = "";

  // A chunk of data has been recieved.
  resp.on("data", chunk => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on("end", () => {
    let url = JSON.parse(data);
    console.log(url);

  });
})
.on("error", err => {
  console.log("Error: " + err.message);
});

server.listen(port, hostname, () => {
    console.log(`server running at https://${hostname}:${port}`)
 })