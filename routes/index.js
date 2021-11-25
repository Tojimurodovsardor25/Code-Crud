const { Router } = require('express')
const router = Router()
const Navinfo = require('../models/NavInfo')
const Footerinfo = require('../models/Footerinfo')


router.get('/', async (req, res) => {
    const navinfo = await Navinfo.find()
    const footerinfo = await Footerinfo.find()
    console.log(navinfo, "Index ma`lumotlar shu yerga keldi");

    res.render('index', ({
        title: 'Index',
        layout: 'layout',
        navinfo,
        footerinfo
    }))
    console.log(navinfo, "Index ma`lumotlari <<<<<<<<");
    console.log(navinfo, "Bosh sahifa >>>>>>>>");
})

module.exports = router;