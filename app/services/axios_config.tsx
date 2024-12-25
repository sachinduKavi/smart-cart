import axios from 'axios'

const BEAR_TOKEN = 'iLzYqN6Qqft0f48l'
const localDomain = axios.create({
    baseURL: 'http://192.168.8.167:3000'
})

const header = {
    headers: {'Content-Type': 'application/json', 'authorization': `${BEAR_TOKEN}`},
    withCredentials: true
}


const domain = localDomain

// Handling other status codes
// 401 - Unauthorized access
domain.interceptors.response.use(
    response => {
        return response
    },

    error => {
        if(error.response) {
            if(error.response.status === 401) {
                console.log(error)
                console.warn('Unauthorized accessed - Redirecting back to homepage.')
                return error.response
            }
        }

        return Promise.reject(error)
    }
)



export {
    domain,
    header
}