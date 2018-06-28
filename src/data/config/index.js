import _ from 'lodash'

let appSecret
let appKey
let apiEndPoint

if (process.env.NODE_ENV === 'production') {
  appSecret = process.env.APP_SECRET
  appKey = process.env.APP_KEY
  apiEndPoint = process.env.API_END_POINT
} else {
  appSecret = 'e54b127abc7cca1862dac91db6256190'
  appKey = 'aHEVYhE0'
  apiEndPoint = 'http://agi.xdua.com/'
}

function getErrorString(variableName) {
  return 'Variable: ' + variableName + ' is not defined'
}

if (_.isNil(appKey)) {
  throw new Error(getErrorString('APP_KEY'))
}

if (_.isNil(appSecret)) {
  throw new Error(getErrorString('APP_SECRET'))
}

if (_.isNil(apiEndPoint)) {
  throw(getErrorString('API_END_POINT'))
}

const APP_SECRET = appSecret
const APP_KEY = appKey
const API_END_POINT = apiEndPoint

export {
  APP_SECRET,
  APP_KEY,
  API_END_POINT,
}