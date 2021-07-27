const express = require('express')
const app = express()
const port = 3000
const expressLayout = require('express-ejs-layouts')
const session = require('express-session')
const flash = require('connect-flash')

require('./utils/db')
const seminar = require('./models/Seminar')

app.set('view engine', 'ejs')
app.use(expressLayout)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized: true
}))
app.use(flash())

app.get('/', (req, res) => {
    res.render('index', { layout: 'layouts/main-layout' })
})

app.get('/seminar', async (req, res) => {
    const pesertaSeminar = await seminar.find()
    res.render('form_seminar', { layout: 'layouts/main-layout', pesertaSeminar, msg: req.flash('msg') })
})

app.post('/seminar', (req, res) => {
    const nama = req.body.nama
    const asal = req.body.asal
    const nohp = req.body.nohp
    const email = req.body.email
    const info = req.body.info

    const newSeminar = new seminar({
        nama, asal, nohp, email, info
    })

    newSeminar.save()

    req.flash('msg', 'Data peserta seminar telah ditambahkan!')
    res.redirect('/seminar')
})

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
})