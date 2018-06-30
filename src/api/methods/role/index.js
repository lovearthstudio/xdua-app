import {
  axios,
  buildGeneralHeaders,
  generalResponseBuilder,
} from '../../generalImports'

// export async function createRole({ token, userGroupId, role, granter, name, avatar, brief }) {
//
//   const API_PATH = '/role'
//   const generalHeaders = buildGeneralHeaders('POST', API_PATH)
//
//   const body = Object.assign({}, {
//     token,
//     bywho,
//     code,
//     name,
//     avatar,
//     brief,
//   })
//
//
//   let res = await axios.post(
//     API_PATH,
//     body,
//     {
//       headers: generalHeaders,
//     }
//   )
//
//   return generalResponseBuilder(res)
// }

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
// export async function editUserGroup({ token, userGroupId, code, name, avatar, brief, enabled }) {
//   const API_PATH = '/ugrp/' + userGroupId
//   const generalHeaders = buildGeneralHeaders('PUT', API_PATH)
//
//   const body = Object.assign({}, {
//     token,
//     code,
//     name,
//     avatar,
//     brief,
//     enabled,
//   })
//
//   let res = await axios.put(
//     API_PATH,
//     body,
//     {
//       headers: generalHeaders,
//     }
//   )
//
//   return generalResponseBuilder(res)
//
// }

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