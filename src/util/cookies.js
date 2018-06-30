import Cookies from 'universal-cookie'
import _ from 'lodash'

const cookies = new Cookies()

const USER_TOKEN = 'user-token'
const DUA_ID = 'dua-id'
const USER_ID = 'user-id'

export const getUserToken = () => {
  return cookies.get(USER_TOKEN)
}

export const setUserToken = (token) => {
  if (_.isNil(token)) {
    cookies.remove(USER_TOKEN)
  } else {
    cookies.set(USER_TOKEN, token)
  }
}

export const getDuaId = () => {
  return cookies.get(DUA_ID)
}

export const setDuaId = (duaId) => {
  if (_.isNil(duaId)) {
    cookies.remove(DUA_ID)
  } else {
    cookies.set(DUA_ID, duaId)
  }
}

export const getUserId = () => {
  return cookies.get(USER_ID)
}

export const setUserId = (userId) => {
  if (_.isNil(userId)) {
    cookies.remove(USER_ID)
  } else {
    cookies.set(USER_ID, userId)
  }
}