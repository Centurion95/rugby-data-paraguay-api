const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id_city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    id_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    },
    gps_location: {
        type: String,
        trim: true
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

const Stadium = mongoose.model('Stadium', thisSchema)

module.exports = Stadium