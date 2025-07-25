// const express = require('express');
// const axios = require('axios');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
// const cors = require('cors'); 

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); 

// let users = []; 

// app.get('/api/auth/linkedin', (req, res) => {
//     const scope = 'openid profile email'; 
//     const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
//     req.session = req.session || {}; 
//     req.session.oauthState = state; 

//     const authUrl = `https://www.linkedin.com/oauth/v2/authorization?` +
//         `response_type=code&` +
//         `client_id=${process.env.LINKEDIN_CLIENT_ID}&` +
//         `redirect_uri=${encodeURIComponent(process.env.LINKEDIN_REDIRECT_URI)}&` +
//         `state=${state}&` +
//         `scope=${encodeURIComponent(scope)}`;
//     res.redirect(authUrl);
// });

// app.get('/api/auth/linkedin/callback', async (req, res) => {
//     const { code, state } = req.query;


//     if (!code) {
//         return res.status(400).send('Authorization code not provided.');
//     }

//     try {
//         const tokenResponse = await axios.post(
//             'https://www.linkedin.com/oauth/v2/accessToken',
//             new URLSearchParams({
//                 grant_type: 'authorization_code',
//                 code: code,
//                 redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//                 client_id: process.env.LINKEDIN_CLIENT_ID,
//                 client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//             }).toString(),
//             {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//             }
//         );

//         const { access_token, expires_in } = tokenResponse.data;

//         // Get user info using the access token (OpenID Connect userinfo endpoint)
//         const userInfoResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
//             headers: {
//                 Authorization: `Bearer ${access_token}`,
//             },
//         });

//         const linkedinUser = userInfoResponse.data;

//         let user = users.find(u => u.linkedinId === linkedinUser.sub);
//         if (!user) {
//             user = {
//                 id: users.length + 1,
//                 linkedinId: linkedinUser.sub,
//                 name: linkedinUser.name,
//                 email: linkedinUser.email,
//                 profilePicture: linkedinUser.picture,
//             };
//             users.push(user);
//         }

//         // Create a JWT for your MERN application
//         const token = jwt.sign(
//             { id: user.id, linkedinId: user.linkedinId },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' }
//         );

//         // Redirect back to your frontend with the JWT (or a success message/token)
//         res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);

//     } catch (error) {
//         console.error('LinkedIn authentication error:', error.response ? error.response.data : error.message);
//         res.redirect(`${process.env.CLIENT_URL}/login?error=linkedin_auth_failed`);
//     }
// });

// // Example protected route (for demonstrating JWT usage)
// app.get('/api/profile', (req, res) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = users.find(u => u.id === decoded.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json({ message: 'Welcome to your profile!', user });
//     } catch (error) {
//         console.error('JWT verification error:', error);
//         res.status(403).json({ message: 'Invalid token' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });