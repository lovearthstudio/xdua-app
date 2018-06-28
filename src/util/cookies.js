import Cookies from 'universal-cookie'
import _ from 'lodash'

const cookies = new Cookies()

const USER_TOKEN = 'user-token'

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