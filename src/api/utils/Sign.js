const { md5 } = require('./md5')
const _ = require('lodash')

function Sign(nonce) {
  let Nonce
  if (_.isNil(nonce)) {
    // Nonce = md5(Math.random() * 1000000)
    Nonce = md5(Math.random())
  } else {
    Nonce = md5(nonce)
  }

  /**
   * Sign the string according to http://doc.xdua.com/guide/dosign.html
   * @param method
   * @param path
   * @param nonce
   * @param appSecret
   * @param appKey
   * @returns {string}
   */
  function generateSign({ method, path, appSecret, appKey }) {
    const stringToSign = method + path + Nonce + appSecret
    const signedString = md5(stringToSign)
    return appKey + '|' + Nonce + '|' + signedString
  }

  return {
    generateSign,
  }

}

const s = Sign()
const { generateSign } = s

module.exports = {
  Sign,
  generateSign,
}
