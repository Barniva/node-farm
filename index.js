// imports usually always happen at the top of the file. Require third-party module after core module. after third-party module then our own coming from our local file system(we have our own modules).
// core modules
const fs = require('fs');
const http = require('http');
const url = require('url');
// third-party modules
const slugify = require('slugify'); //slugify will be a function which we can use to basically creates slugs.
// slugs is just the last part of a URL that contains a unique string that identifies the resource that website is displaying
// our own modules
const replaceTemplate = require('./modules/replaceTemplate'); // exporting something from one module and imported it into another one.
// the dot actually means the current location of this module.

///////////////////////////////////////////////
// FILES

// BLocking, synchronous way
// Reading file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// // writing file
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'Utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! ❌');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         console.log('Your file has been written 😁');
//       });
//     });
//   });
// });
// console.log('will read file!');

///////////////////////////////////////////////
// SERVER

// this is top level code, so it will only run once when the file is executed and not everytime the server is hit by a request so no problem with synchronous code here but we could not do this inside of this createServer callback function
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);
// console.log(slugify('Fresh Avocados', { lower: true }));

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const { query, pathname } = url.parse(req.url, true); // parse is to basically parse the variables out of the url

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    // res.end(tempOverview);

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join(''); // this will joim all of these elements into a string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id]; // retrieving an element based on a query string
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data); // this data comes b/c it has access to the top-level code b/c scope chain.

    // Nort found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-owm-header': 'hello-world',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to requests on port 8000');
});
