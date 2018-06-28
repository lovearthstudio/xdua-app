const CryptoJS = require('crypto-js')

export function md5(content) {
  return CryptoJS.MD5(content).toString()
}
