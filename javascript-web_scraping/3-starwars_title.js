#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie-ID>');
  process.exit(1);
}

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } else {
      console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
    }
  }
});
