const Twit = require('twit');

const T = new Twit({
consumer_key:         'jaec1gzjvUEH3m0rBzI0lesWe',
consumer_secret:      'Yl2ruQYn4yAI92cCrQ7E1ycdoF8a5kJJxKB1KkJ0EekvzqXvPg',
access_token:         '3003116730-sL8ICd3r19woBjqwqmlgXasNzMzhwJj5Ej6iO9Q',
access_token_secret:  'PXLnuElROCTOjNAyEwEOap7sDamKrTFI42apzrGYOi7Km',
    timeout_ms:           60*1000,
    strictSSL:            true,
});

module.exports = {
    serach(query, callback) {
        T.get('search/tweets', { q: `${query} since:2018-07-11`, count: 1000 }, function(err, data, response) {
            if (err) {
                console.log('ERROR: ', err);
                return;
            }
            callback(data.statuses);
        });
    }
};

