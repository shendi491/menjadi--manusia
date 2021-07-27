const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster1.tjior.mongodb.net/menjadi_manusia',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })