const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        default: null
    },
    gender: {
        type: String, //M, F (male, female)
        required: true,
        uppercase: true,
        trim: true,
        minLength: 1,
        maxLength: 1,
    },
    id_identifier_type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IdentifierType'
    },
    identifier_number: {
        type: String,
        required: true,
    },
    id_country_birth: {
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

const Person = mongoose.model('Person', thisSchema)

module.exports = Person