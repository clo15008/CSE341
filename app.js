const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false}))
   .get('/', (req, res, next) => {
      res.render('pages/template.ejs', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
    })

server.listen(5000);