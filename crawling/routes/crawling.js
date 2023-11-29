const express = require('express');
const iconv_lite = require('iconv-lite');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const router = express.Router();

const getNaverNewsEconomy = async()=> {
    try{
        return axios({
            url: "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101",
            method: 'GET',
            responseType: "arraybuffer"
        })
    } catch(err){
        console.error(err);
    }
}

router.get('/naver-headline-news', (req, res) => {
    getNaverNewsEconomy().then(html => {
        let economyNews = [];
        let news_line;
        let htmlDoucment = iconv_lite.decode(html.data, 'EUC-KR');
        let file = './naverNews.html';
        fs.writeFileSync(file, htmlDoucment, (err) => console.log(err));
        const $ = cheerio.load(htmlDoucment);
        const $section_economy = $("._cluster_content").each(function(index, element){
            news_line = $(element).find("div.sh_text > a").text();
            console.log('###  ' + news_line);
            economyNews[index] = news_line;
        });
        res.send(economyNews);
    })
    .catch(reason => console.log(reason));
});

module.exports = router;