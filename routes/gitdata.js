const express = require('express');
const router = express.Router();
const https = require('https');


router.get('/userinfo/:user', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    })
})

router.get('/repos/:user/:page', async function (req, res) {
    
    const user = req.params.user;
    const page = req.params.page;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user + '/repos?per_page=6&page='+page, 
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
        res.append('mera','lele');
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    })
})

router.get('/getAllRepos/:user', async function (req, res) {
    
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user + '/repos', 
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
        res.append('mera','lele');
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    })
})


router.get('/repoinfo/:user/:reponame', async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    })
})



module.exports = router;