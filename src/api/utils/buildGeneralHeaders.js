import {
  APP_SECRET,
  APP_KEY,
  API_VERSION,
  getDuaId,
} from '../data'

import { generateSign } from './Sign'
export function buildGeneralHeaders(METHOD, API_PATH) {
  return {
    dua: getDuaId(),
    apiv: API_VERSION,
    sign: generateSign({
      'method': METHOD,
      'path': API_PATH,
      'appSecret': APP_SECRET,
      'appKey': APP_KEY,
    }),
  }
}
