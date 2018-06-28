import axiosClass from 'axios'
import { API_END_POINT } from 'src/data/api'

export const axios = axiosClass.create({
  baseURL: API_END_POINT,
})
