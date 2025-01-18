import { createContext, useState } from "react";
import axios from 'axios'
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { data, useNavigate } from "react-router-dom";


export const AppContext = createContext()


const AppContextProvider = (props) => {

    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const { getToken } = useAuth()
    const { isSignedIn } = useUser()
    const { openSignIn } = useClerk()

    const [credit, setCredit] = useState(false)

    const [image, setImage] = useState(false)
    const [resultImage, setResultImage] = useState(false)

    const loadCreditsData = async () => {
        try {
            const token = await getToken()
            const response = await axios.get(backendUrl + '/api/user/credits', {
                headers: { token }
            })
            if (response.data.success) {
                setCredit(response.data.credits)
            }
            else {
                console.log(response.data.message);
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }


    const removeBG = async (image) => {
        try {

            if (!isSignedIn) {
                return openSignIn()
            }
            setImage(image)

            setResultImage(false)
            navigate('/result')

            const token = await getToken()

            const formData = new FormData()
            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/image/remove-bg', formData, {
                headers: { token }
            })

            if (data.success) {
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
            }

            else {
                toast.error(data.message)
                data.creditBalance && setCredit(data.creditBalance)
                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }


        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        credit, setCredit, loadCreditsData, backendUrl,
        image, setImage, removeBG, resultImage, setResultImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;