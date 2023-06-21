import apiService from '../http-common'

const account = {
    async register(user) {
        try {
            const payload = {
                method: 'post',
                url: 'register',
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                data: user,
              }
            const response = await apiService.request(payload)
            return { isError: false, response: response }
        } catch(e) {
            return { isError: true, error: err }
        }
    },

    async updateAccount(user) {
        try {
            const payload = {
                method: 'PUT',
                url: 'account',
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                data: user,
              }
            const response = await apiService.request(payload)
            return { isError: false, response: response }
        } catch(e) {
            return { isError: true, error: err }
        }
    }
}

export default account