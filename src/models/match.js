const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    order_number: {
        type: Number,
        // required: true,
    },
    id_local_team: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Club'
    },
    id_visiting_team: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Club'
    },
    date: {
        type: Date,
        default: null
    },
    local_team_final_score: {
        type: Number,
    },
    visiting_team_final_score: {
        type: Number,
    },
    local_team_points_earned: {
        type: Number,
    },
    visiting_team_points_earned: {
        type: Number,
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

const Match = mongoose.model('Match', thisSchema)

module.exports = Match