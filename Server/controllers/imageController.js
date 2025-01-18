import axios from 'axios';
import fs from 'fs'
import FormData from 'form-data';
import userModel from '../models/userModel.js';

// remove background from image 

const removeBGIamge = async (req, res) => {
    try {

        const { clerkId } = req.body
        const user = await userModel.findOne({ clerkId })
        if (!user) {
            return res.json({ success: false, message: 'user not found' })
        }
        if (user.creditBalance === 0) {
            return res.json(({ success: false, message: 'no credit balance', creditBalance: user.creditBalance }))
        }

        const imagePath = req.file.path;
        // reading the image file

        const imageFile = fs.createReadStream(imagePath)

        const formdata = new FormData()

        formdata.append('image_file', imageFile)

        const { data } = await axios.post('https://clipdrop-api.co/remove-background/v1', formdata, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })
        const base64image = Buffer.from(data, 'binary').toString('base64')

        const resultImage = `data:${req.file.mimetype};base64,${base64image}`

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

        res.json({ success: true, resultImage, creditBalance: user.creditBalance - 1, message: 'background removed' })

    } catch (error) {

        console.log(error.message);
        res.json({ success: false, message: error.message })

    }
}

export { removeBGIamge }