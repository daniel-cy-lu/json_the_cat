const request = require('request');
// const fs = require('fs');
let arg = process.argv.slice(2);
let input = arg[0].toLowerCase().slice(0,3);


//example input in terminal node fetcher.js http://www.example.edu/ ./index.html, where the first variable is an url to request the info from and the second variable is a local html file to store the info. Please create the local file first.

request('https://api.thecatapi.com/v1/breeds/search?q=' + input, (error, response, body) => {
  console.log('error:', error);
  let data = JSON.parse(body);
  console.log('data:', data);
  
  
});

