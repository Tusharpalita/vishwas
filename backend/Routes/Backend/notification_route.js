// const admin = require('firebase-admin');

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//     credential: admin.credential.cert('../../Files/vishwash-dc50c-firebase-adminsdk-az1im-4587f6cdcc.json')
// });

// const registrationToken = 'AAAAeavTHNo:APA91bGqx0ZpMDUH_SNkUmr7dkuWJCVFtbXjlF1OYOMjCwfEZIsUOYRNB3OVwyB1QK44kVxTAlnHhYaC01-ggY0o5_3Q2vSgolu6qiFXpDcZdsWZ6DBtXscwL6YUOnqAXIA7b0QHsWYx'; // This is the token of the device you want to send the notification to

// const message = {
//     notification: {
//         title: 'Notification Title',
//         body: 'Notification Body'
//     },
//     token: registrationToken
// };

// admin.messaging().send(message)
//     .then((response) => {
//         console.log('Successfully sent message:', response);
//     })
//     .catch((error) => {
//         console.log('Error sending message:', error);
//     });