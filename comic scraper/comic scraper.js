const axios = require('axios');
const cheerio = require('cheerio');

let url = 'https://globalcomix.com/c/invincible-compendium/chapters/en/1/1';

function getComic() {
    axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    }).then(function (res) {
        let html = res.data;
        let $ = cheerio.load(html);

        let title = $('h1.comic-title').text();
        console.log("comic title: " + title);

        let imgs = [];
        $('img.comic-page').each(function (i, el) {
            imgs[i] = $(el).attr('src');
        });

        for (let i = 0; i < imgs.length; i++) {
            console.log("page " + (i + 1) + ": " + imgs[i]);
        }
    }).catch(function (err) {
        console.log("error: " + err);
    });
}

getComic();