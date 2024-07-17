//Use the 'url' module to parse a URL and print its components (protocol, host, path, etc.).

const url = require('url');

const urlString = 'https://www.example.com/path?query=value';
const parsedUrl = url.parse(urlString, true);




