const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    id_person: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Person'
    },
    id_club: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Club'
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

const Player = mongoose.model('Player', thisSchema)

module.exports = Player