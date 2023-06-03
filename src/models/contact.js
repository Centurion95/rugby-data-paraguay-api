const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    id_owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: 'Club' //Person
    },
    id_contact_type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Contact_Type'
    },
    value: {
        type: String,
        required: true,
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

const Contact = mongoose.model('Contact', thisSchema)

module.exports = Contact