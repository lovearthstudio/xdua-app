import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
} from '../../generalImports'

export async function createUserGroup({ token, duaId, bywho, code, name, avatar, brief }) {

  const API_PATH = '/ugrp'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    bywho,
    code,
    name,
    avatar,
    brief,
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

export async function deleteUserGroup({ token, duaId, userGroupId }) {

  const API_PATH = '/ugrp/' + userGroupId
  const generalHeaders = buildGeneralHeaders('DELETE', API_PATH, duaId)

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

export async function editUserGroup({ token, duaId, userGroupId, code, name, avatar, brief, enabled }) {
  const API_PATH = '/ugrp/' + userGroupId
  const generalHeaders = buildGeneralHeaders('PUT', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    code,
    name,
    avatar,
    brief,
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

export async function getUserGroup({ token, duaId, userGroupId }) {
  const API_PATH = '/ugrp/' + userGroupId
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

export async function queryUserGroup({ token, duaId, uid, name, brief, offset, limit, order }) {
  const API_PATH = '/ugrp'
  const generalHeaders = buildGeneralHeaders('GET', API_PATH, duaId)

  const params = Object.assign({}, {
    token,
    uid,
    name,
    offset,
    brief,
    limit,
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