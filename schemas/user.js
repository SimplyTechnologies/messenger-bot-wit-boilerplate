'use strict';

const mongoose = require('mongoose-q')(require('mongoose'));
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    recipientId: {type: String, unique: true},

    firstName: String, 
    lastName: String, 
    profilePic: String, 
    locale: String,
    timezone: Number,
    gender: String,

    lastLocation: {
        title: String,
        lat: Number, 
        lon: Number,
        when: Date
    },

    locations: [
        {
            title: String, 
            lat: Number, 
            lon: Number,
            when: Date
        }    
    ],

    lastActivity: {type: Date, default: Date.now, index: true},

    created: {type: Date, default: Date.now, index: true},
    updated: {type: Date, default: Date.now}
});



mongoose.model('User', UserSchema);

