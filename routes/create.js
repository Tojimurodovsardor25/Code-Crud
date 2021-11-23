const { Router } = require('express')
const router = Router()
const fileUpload = require('../middleware/fileUpload')
const toDelete = require('../middleware/toDelete')
const NavInfo = require('../models/NavInfo')



router.get('/', async (req, res) => {
    const navinfo = await NavInfo.find()
    res.render('create', ({
        title: 'create',
        layout: 'layout',
        navinfo
    }))
})


router.post('/add', fileUpload.single('navicon'), async (req, res) => {
    console.log(req.body, "Ma`lumot olindi");
    const { navtitle } = req.body
    console.log(req.file, 'req.file haqida ma`lumot ');
    const navicon = req.file.filename

    console.log(req.file.filename, "ma'lumot uchun req.file.filename");
    const navinfo = new NavInfo({
        navtitle,
        navicon
    })

    await navinfo.save()
    console.log(navinfo, "Saqlandi asosiy sahifaga qayt");
    res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
    console.log(req.body, "O`zgartirish sahifasiga jo'natildi");
    const navinfo = await NavInfo.findById(req.params.id)

    res.render('create', {
        title: 'O`zgartirish',
        layout: 'layout',
        navinfo
    })
    console.log("O`zgartirish sahifasi");
})

router.post('/edit/:id', fileUpload.single('navicon'), async (req, res) => {
    console.log(req.body, "O`zgartirish haqida ma`lumot keldi");
    const { navicon } = await NavInfo.findById(req.params.id)
    const navinfo = req.body

    if (req.file) {
        toDelete(navicon)
        navinfo.navicon = req.file.filename
    }

    await NavInfo.findByIdAndUpdate(req.params.id, navinfo, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.body, "Ma`lumot O'zgartirildi");
            res.redirect('/')
        }
    })

    console.log(navinfo, "Saqlandi asosiy sahifaga qayt");
})

router.post('/delete/:id', async (req, res) => {
    console.log(req.body, "O`chirish haqida ma`lumot keldi <<<<</. . . ./>>>>>");

    const { navicon } = await NavInfo.findById(req.params.id)
    await NavInfo.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.body, "Ma`lumot o`chirildi <<<<</. . . ./>>>>>");
            toDelete(navicon)
            res.redirect('/')
        }
    })
})

module.exports = router;