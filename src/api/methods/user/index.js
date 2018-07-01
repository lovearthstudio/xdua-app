import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
  md5,
  formatPhoneNumber,
} from '../../generalImports'

function formatBodyBySignUpType(target, username, byPhone) {
  if (byPhone === true) {
    const formattedUsername = formatPhoneNumber(username)
    return Object.assign(target, {
      by: 'tel',
      ustr: formattedUsername,
    })
  } else {
    return Object.assign(target, {
      by: 'mail',
      ustr: username,
    })
  }
}

export async function signUp({ duaId, username, password, vfcode, ugrp, role, byPhone }) {
  const API_PATH = '/user'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const passwordMD5 = md5(password)
  let body = Object.assign({}, {
    pwd: passwordMD5,
    vfcode,
    ugrp,
    role,
  })
  body = formatBodyBySignUpType(body, username, byPhone)

  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}

export async function resetPassword({duaId, username, password, vfcode, byPhone }) {

  const API_PATH = '/repass'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const passwordMD5 = md5(password)

  let body = Object.assign({}, {
    action: 'reset',
    pwd: passwordMD5,
    vfcode,
  })
  body = formatBodyBySignUpType(body, username, byPhone)

  console.log(body)
  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}

export async function changePassword({ token, duaId, password, oldpassword, vfcode, user_id }) {

  const API_PATH = '/pass/' + user_id
  const generalHeaders = buildGeneralHeaders('PUT', API_PATH, duaId)

  const passwordMD5 = md5(password)
  const oldPasswordMD5 = md5(oldpassword)

  const body = Object.assign({}, {
    token,
    action: 'reset',
    oldpwd: oldPasswordMD5,
    pwd: passwordMD5,
    vfcode,
  })

  let res = await axios.put(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)
}

export async function setUpUser({ token, duaId, user_id, name, saying, sex, bday, avatar, brief, mail }) {

  const API_PATH = '/user/' + user_id
  const generalHeaders = buildGeneralHeaders('PUT', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    name,
    saying,
    sex,
    bday,
    avatar,
    brief,
    mail,
  })

  let res = await axios.put(
    API_PATH,
    body,
    {
      headers: generalHeaders,
    }
  )
  return generalResponseBuilder(res)
}

export async function queryUser({ token, duaId, tel, mail, name, brief, offset, limit, page, order }) {
  const API_PATH = '/user'
  const generalHeaders = buildGeneralHeaders('GET', API_PATH, duaId)

  const params = Object.assign({}, {
    token,
    tel,
    mail,
    name,
    offset,
    brief,
    limit,
    page,
    order,
  })

  let res = await axios.get(
    API_PATH,
    {
      headers: generalHeaders,
      params,
    }
  )
  return generalResponseBuilder(res)

}

export async function getUser({ token, duaId, user_id }) {
  const API_PATH = '/user/' + user_id
  const generalHeaders = buildGeneralHeaders('GET', API_PATH, duaId)

  const params = {
    token,
  }

  let res = await axios.get(
    API_PATH,
    {
      headers: generalHeaders,
      params,
    }
  )

  return generalResponseBuilder(res)

}