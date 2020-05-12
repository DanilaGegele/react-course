import axios from 'axios'

export const axiosLocal = axios.create({
  baseURL: '/server/'
})
