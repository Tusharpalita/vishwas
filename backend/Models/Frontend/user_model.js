const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String
        },
        email: {
            type: String,
        },
        mobileNo: {
            type: String
        },
        password: {
            type: String,
        },
        isPolice : {
            type : Boolean
        },
        policeIdName : {
            type : String
        },
        policeIdNumber : {
            type : String
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Users', UserSchema);
