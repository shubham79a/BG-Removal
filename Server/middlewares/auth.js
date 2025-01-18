import jwt from 'jsonwebtoken';

// middleware to decode jwt token to get clerk id

const authUser = async (req, res, next) => {
    try {

        // we are using development not production level
        // for production level we use expressUserAuth( ) like

        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized login again' })
        }

        const tokenDecode = jwt.decode(token)
        req.body.clerkId = tokenDecode.clerkId
        next()

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


export default authUser