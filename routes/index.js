const { Router } = require('express')
const router = Router()
// const Navinfo = require('../models/NavInfo')


router.get('/', (req, res) => {
    res.render('index', ({
        title: 'Index',
        layout: 'layout',
    }))
})

module.exports = router;