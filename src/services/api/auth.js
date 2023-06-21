import apiService from '../http-common'
import { tokenService } from '../storageService'

const auth = {
  async signIn(payload) {
    try {
      const response = await apiService.request(payload)
      tokenService.saveToken(response.data.token)
      apiService.setHeader()

      return { isError: false, user: response.data.member }
    } catch (err) {
      return { isError: true, error: err }
    }
  },
}
export default auth
