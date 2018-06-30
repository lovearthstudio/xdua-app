import {
  APP_SECRET,
  APP_KEY,
  API_VERSION,
} from '../data'

import { generateSign } from './Sign'
export function buildGeneralHeaders(METHOD, API_PATH, duaId) {
  return {
    dua: duaId,
    apiv: API_VERSION,
    sign: generateSign({
      'method': METHOD,
      'path': API_PATH,
      'appSecret': APP_SECRET,
      'appKey': APP_KEY,
    }),
  }
}
