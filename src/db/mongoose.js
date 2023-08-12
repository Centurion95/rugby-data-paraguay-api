const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL) //dev
// mongoose.connect(process.env.ATLAS_URL) //production