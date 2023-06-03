const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    id_role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
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

const User = mongoose.model('User', thisSchema)

module.exports = User