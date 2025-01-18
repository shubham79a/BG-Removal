import multer from 'multer'

// passing formdata
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

export default upload