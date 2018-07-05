import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
} from '../../generalImports'

export async function createUserRole({ token, duaId, ugrp, role, toWho }) {

  const API_PATH = '/usro'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    ugrp,
    role,
    towho: toWho,
  })
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

export async function deleteUserRole({ token, userGroupId }) {

  const API_PATH = '/ugrp/' + userGroupId
  const generalHeaders = buildGeneralHeaders('DELETE', API_PATH)

  const params = Object.assign({}, {
    token,
  })
  let res = await axios.delete(
    API_PATH,
    {
      params,
      headers: generalHeaders,
    }
  )

  return generalResponseBuilder(res)

}

export async function editUserRole({ token, duaId, usro_id, expire, note, enabled }) {
  const API_PATH = '/usro/' + usro_id
  const generalHeaders = buildGeneralHeaders('PUT', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    expire,
    note,
    enabled,
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

export async function getUserRole({ token, duaId, usro_id }) {
  const API_PATH = '/usro/' + usro_id
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

export async function queryUserRole({ token, duaId, uid, ugrp, role, byuid, brief, offset, limit, order, granter }) {
  const API_PATH = '/usro'
  const generalHeaders = buildGeneralHeaders('GET', API_PATH, duaId)

  const headers = Object.assign(
    {},
    generalHeaders,
    {
      token,
    })

  const params = Object.assign({}, {
    uid,
    ugrp,
    offset,
    role,
    byuid,
    brief,
    limit,
    order,
    granter,
  })
  console.log(params)

  let res = await axios.get(
    API_PATH,
    {
      headers,
      params,
    }
  )

  return generalResponseBuilder(res)

}