import {
  APP_SECRET,
  APP_KEY,
  API_VERSION,
  axios,
  generateSign,
  generalResponseBuilder
} from '../../generalImports'

export async function getDuaIdFromServer (model = 'unknown', man = 'unknown', os = 'unknown') {
  let data = {
    dsn: '',
    type: 'browser',
    model,
    man,
    os,
    apv:'1.0.0',
    aname:'www.xdua.com',
    app:'com.wikicivi.admin',
    channel:'RELEASE',
    pkg: 'test.pname.292607778',
  }

  const API_PATH = '/dua'
  let headers = {
    'apiv': API_VERSION,
    'sign': generateSign({
      'method': 'POST',
      'path': API_PATH,
      'appSecret': APP_SECRET,
      'appKey': APP_KEY,
    }),
  }

  let res = await axios.post(API_PATH, data,  {
    headers,
  })

  return generalResponseBuilder(res)
}