const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id_sport: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sport'
    },
    id_country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
    date_from: {
        type: Date,
        default: null
    },
    date_to: {
        type: Date,
        default: null
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

const Tournament = mongoose.model('Tournament', thisSchema)

module.exports = Tournament