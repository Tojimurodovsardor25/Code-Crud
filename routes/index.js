const { Router } = require('express')
const router = Router()
const Navinfo = require('../models/NavInfo')


router.get('/', async (req, res) => {
    const navinfo = await Navinfo.find()
    console.log(navinfo, "Index ma`lumotlar shu yerga keldi");

    res.render('index', ({
        title: 'Index',
        layout: 'layout',
        navinfo

    }))
    console.log(navinfo, "Index ma`lumotlari <<<<<<<<");
    console.log(navinfo, "Bosh sahifa >>>>>>>>");
})

module.exports = router;