const express = require('express')
const route = express.Router()
const Notification = require('../../Models/Frontend/notification_model')
const bcrypt = require('bcryptjs');
const multer = require('multer')
const jwt = require('jsonwebtoken');
const authMiddleWare = require('../../Middleware/authMiddleware')
const adminMiddleWare = require('../../Middleware/adminMiddleware')
const fs = require('fs');
const path = require('path')



// get all notification 
route.get('/get/all', async (req, res) => {
    try {
        const notification = await Notification.find()

        if (!notification) {
            return res.status(200).json({ type: "error", message: 'Notification not found', Notification: [] });
        }

        res.status(200).json({ type: "success", message: 'Notification found successfully', Notification: notification || [] });
    } catch (error) {
        res.status(500).json({ type: "error", message: 'Internal server error' });
        console.log(error);
    }
})


module.exports = route
