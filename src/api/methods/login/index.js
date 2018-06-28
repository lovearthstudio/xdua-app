import {
  md5,
  APP_SECRET,
  APP_KEY,
  API_VERSION,
  setDuaId,
  getDuaId,
  axios,
  generateSign,
} from '../../generalImports'

export async function login({ username, password }) {

  const API_PATH = '/login'

  // Add '+86-' to the username, since we currently only support registration from China mainland
  const formattedUsername = '+86-' + username

  const headers = {
    'dua': getDuaId(),
    'apiv': API_VERSION,
  }
  // Use md5 to hash the password
  const passwordMD5 = md5(password)

  const body = {
    by: 'tel',
    ustr: formattedUsername,
    pwd: passwordMD5,
  }

  let res = await axios.post(
    API_PATH,
    body,
    {
      headers: Object.assign(
        {},
        headers,
        {
          'sign': generateSign({
            'method': 'POST',
            'path': API_PATH,
            'appSecret': APP_SECRET,
            'appKey': APP_KEY,
          }),
        }),
      params: {

      },
    }
  )

  const { data } = res

  if (data.status === 0) {
    let { dua_id } = data.result

    setDuaId(dua_id)

    return data.result
  } else {
    throw new Error(data.reason)
  }

}

