
const https = require("https");


https
  .get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-29&sortBy=publishedAt&apiKey=7811dd14b7a048ceacb34261e6ab37b5" , resp => {
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