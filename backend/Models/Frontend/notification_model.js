const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    message: {
        type: String,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Notification', NotificationSchema);


