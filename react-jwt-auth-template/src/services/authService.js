// src/services/authService.js

import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL; // The Express API url

async function signup(formData) { /* Creates user object from the REACT front ent */

    try { /*  */
        const response = await axios.post(`${BACKEND_URL}/users/signup`, formData)

        if (response.error) {
            throw new Error(response.error)
          }

        return response.data

    } catch (error) {
        console.log(error)
    }
}

export { signup, }
