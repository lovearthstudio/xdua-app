import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
} from '../../generalImports'

export async function createRole({ token, ugrp, role, granter, name, avatar, brief }) {

  const API_PATH = '/role'
  const generalHeaders = buildGeneralHeaders('POST', API_PATH)

  const body = Object.assign({}, {
    token,
    ugrp,
    role,
    granter,
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

// export async function deleteUserGroup({ token, userGroupId }) {
//
//   const API_PATH = '/ugrp/' + userGroupId
//   const generalHeaders = buildGeneralHeaders('DELETE', API_PATH)
//
//   const params = Object.assign({}, {
//     token,
//   })
//   let res = await axios.delete(
//     API_PATH,
//     {
//       params,
//       headers: generalHeaders,
//     }
//   )
//
//   return generalResponseBuilder(res)
//
// }
//
export async function editRole({ token, duaId, roleId, ugrp, role, name, avatar, brief, enabled }) {
  const API_PATH = '/role/' + roleId
  const generalHeaders = buildGeneralHeaders('PUT', API_PATH, duaId)

  const body = Object.assign({}, {
    token,
    name,
    ugrp,
    role,
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

export async function getRole({ token, duaId, userGroupId, role }) {
  const API_PATH = '/role/' + userGroupId + '/' + role
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

export async function queryRole({ token, duaId, uid, ugrp, name, brief, offset, limit, order, granter }) {
  const API_PATH = '/role'
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
    name,
    offset,
    brief,
    limit,
    order,
    granter,
  })

  let res = await axios.get(
    API_PATH,
    {
      headers,
      params,
    }
  )

  return generalResponseBuilder(res)

}