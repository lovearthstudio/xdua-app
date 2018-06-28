import axiosClass from 'axios'
import { API_END_POINT } from '../data/config'

export const axios = axiosClass.create({
  baseURL: API_END_POINT,
})
