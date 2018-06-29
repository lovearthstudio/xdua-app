import {
  axios,
  buildGeneralBody,
  generalResponseBuilder,
} from '../../generalImports'

export async function createUserGroup({ token, bywho, code, name, avatar, brief }) {

  const API_PATH = '/ugrp'
  const generalBody = buildGeneralBody('POST', API_PATH)

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
      headers: generalBody,
    }
  )

  return generalResponseBuilder(res)
}

export async function deleteUserGroup({ token, ugrp }) {

  const API_PATH = '/ugrp/' + ugrp
  const generalBody = buildGeneralBody('DELETE', API_PATH)

  const params = Object.assign({}, {
    token,
  })
  let res = await axios.delete(
    API_PATH,
    {
      params,
      headers: generalBody,
    }
  )

  return generalResponseBuilder(res)

}

export async function editUserGroup({ token, ugrp, code, name, avatar, brief, enabled }) {
  const API_PATH = '/ugrp/' + ugrp
  const generalBody = buildGeneralBody('PUT', API_PATH)

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
      headers: generalBody,
    }
  )

  return generalResponseBuilder(res)

}

export async function getUserGroup({ token, ugrp }) {
  const API_PATH = '/ugrp/' + ugrp
  const generalBody = buildGeneralBody('GET', API_PATH)

  const params = {
    token,
  }

  let res = await axios.get(
    API_PATH,
    {
      headers: generalBody,
      params,
    }
  )

  return generalResponseBuilder(res)

}

export async function queryUserGroup({ token, uid, name, brief, offset, limit, order }) {
  const API_PATH = '/ugrp'
  const generalBody = buildGeneralBody('GET', API_PATH)

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
      headers: generalBody,
      params,
    }
  )

  return generalResponseBuilder(res)

}