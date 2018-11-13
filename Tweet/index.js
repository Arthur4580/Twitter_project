const express = require('express');
const bodyParser = require('body-parser');
const twit = require('./twitter');


const  app = express();
app.set('view engine', 'ejs');
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index', { hakob: 'HAKOB!!' });
});


app.post('/s', (req, res) => {
    const k = req.body.k;
    twit.serach(k, statuses => {
            res.json({ search: statuses });
            console.log(statuses);
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));