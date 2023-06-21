import apiService from '../http-common'

const order = {
    async getAllOrders() {
        try {
            const payload = {
                method: 'GET',
                url: '#',
              }
            const response = await apiService.request(payload)
            return response;
        } catch(e) {
            return { isError: true, error: err }
        }
    }
}
    export default order;