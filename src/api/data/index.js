import {
  APP_KEY,
  APP_SECRET,
} from '../../data/config'

const API_VERSION = '1.0.0'

let DUA_ID


function setDuaId(duaId) {
  DUA_ID = duaId
}

function getDuaId() {
  return DUA_ID
}

module.exports = {
  getDuaId,
  setDuaId,
  API_VERSION,
  APP_KEY,
  APP_SECRET,
}