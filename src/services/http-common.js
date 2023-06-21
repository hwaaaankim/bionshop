import axios from 'axios'
import { tokenService } from './storageService'
import { BASE_URL } from '../config/config'

const apiService = {
  init() {
    axios.defaults.baseURL = BASE_URL
  },

  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${tokenService.getToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  request(data) {
    return axios(data)
  },
}

export default apiService
