import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
  formatPhoneNumber,
} from '../../generalImports'

const PHONE_VFCODE_TEMPLATE = 'SMS_25335288'
const MAIL_SIGN_UP_VFCODE_TEMPLATE = 'DMS_VFC4USEREG'
const MAIL_RESET_PASSWORD_VFCODE_TEMPLATE = 'DMS_VFC4RSTPWD'

export async function getVfcodeByPhone({duaId, username}) {

  const API_PATH = '/vfc'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const formattedUsername = formatPhoneNumber(username)

  const body = Object.assign({}, {
    vfaddr: formattedUsername,
    tmpl: PHONE_VFCODE_TEMPLATE,
  })

  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}

export async function getVfcodeByMailWhenSignUp({duaId, username}) {

  const API_PATH = '/vfc'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const body = Object.assign({}, {
    vfaddr: username,
    tmpl: MAIL_SIGN_UP_VFCODE_TEMPLATE,
  })

  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}

export async function getVfcodeByMailWhenResetPassword({duaId, username}) {

  const API_PATH = '/vfc'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const body = Object.assign({}, {
    vfaddr: username,
    tmpl: MAIL_RESET_PASSWORD_VFCODE_TEMPLATE,
  })

  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}