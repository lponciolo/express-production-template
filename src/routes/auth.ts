import jwt from 'jsonwebtoken';
import * as express from 'express'

const router = express.Router()

const users = [
    {
        username: process.env.USER_NAME,
        password: process.env.USER_PASS,
        role: 'admin'
    },
];

router.post('/', (req, res) => {
    const accessTokenSecret = process.env.TOKEN_SECRET as string;
       
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});





export default router