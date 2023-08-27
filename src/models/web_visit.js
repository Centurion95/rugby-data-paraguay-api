const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    page_id: {
        type: Number,
        required: true,
    },
    visitor_ip: {
        type: String,
        // required: true,
        trim: true
    },
    visitor_user_agent: {
        type: String,
        // required: true,
        trim: true
    },
    archived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
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

const Web_Visit = mongoose.model('Web_Visit', thisSchema)

module.exports = Web_Visit