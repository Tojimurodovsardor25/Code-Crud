const { Router } = require('express')
const router = Router()
const Footerinfo = require('../models/Footerinfo')

router.get('/', async (req, res) => {
    const footerinfo = await Footerinfo.find()
    res.render('footerinfo', ({
        title: 'Footer manba bo`limi',
        layout: 'layout',
        footerinfo
    }))
    console.error('Footer haqida ma`lumot');
})

router.post('/create/additations', async (req, res) => {
    console.error('Footer haqida ma`lumot qoshish');
    const { manbaa1, link1, manbaa2, link2, manbaa3, link3, siteTitle } = req.body
    const footerinfo = new Footerinfo({
        manbaa1,
        link1,
        manbaa2,
        link2,
        manbaa3,
        link3,
        siteTitle
    })

    await footerinfo.save()
    console.log(footerinfo, "Saqlandi asosiy sahifaga qayt");
    console.error('Footer haqida ma`lumot qo`shildi >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    res.redirect('/')
})

router.get('/session/editations/:id', async (req, res) => {
    // console.log(req.body, "O`zgartirish sahifasiga jo'natildi");
    const footerinfo = await Footerinfo.findById(req.params.id)

    res.render('footerinfo', {
        title: 'O`zgartirish',
        layout: 'layout',
        footerinfo
    })
    // console.log("O`zgartirish sahifasi");
})

router.post('/session/editations/:id', async (req, res) => {
    // console.log(req.body, "O`zgartirish haqida ma`lumot keldi");
    const footerinfo = req.body

    await Footerinfo.findByIdAndUpdate(req.params.id, footerinfo, (err) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(req.body, "Ma`lumot O'zgartirildi");
            // console.log(navinfo, "Saqlandi asosiy sahifaga qayt");
            res.redirect('/')
        }
    })

})

router.get('/categoryfooter/delete/:id', async (req, res) => {
    console.log(req.body, "O`chirish haqida ma`lumot keldi <<<<</. . . ./>>>>>");
    await Footerinfo.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.body, "Ma`lumot o`chirildi <<<<</. . . ./>>>>>");
            res.redirect('/')
        }
    })
})

module.exports = router;