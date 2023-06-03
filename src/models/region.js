const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    id_sport: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sport'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    id_country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
    archived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
        // default: Date.now
        default: null
    }
}, {
    timestamps: true
})

// thisSchema.pre('save', async function (next) {
//     const document = this
//     console.log('Document saved:', document)
//     next()
// })

const Region = mongoose.model('Region', thisSchema)

module.exports = Region