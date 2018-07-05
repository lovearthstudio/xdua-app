import {
  queryUserRole,
  getUserRole,
  editUserRole,
  createUserRole,
} from '../../src/api/methods/userRole'

//id: Ro4a2u9d
const userGroupCode = '1chenxi-test'
const userRoleId = '1nc00XTu'

export async function queryUserRoleTest(token, duaId) {
  return queryUserRole({
    token,
    duaId,
    ugrp: userGroupCode,
  })
}

export async function editUerRoleTest(token, duaId) {
  return editUserRole({
    token,
    duaId,
    usro_id: userRoleId,
    expire: '3000',
    note: 'note test',
    enabled: '1'
  })
}

export async function getUserRoleTest(token, duaId) {
  return getUserRole({
    token,
    duaId,
    usro_id: userRoleId,
  })
}

export async function createUserRoleTest(token ,duaId) {
  return createUserRole({
    token,
    duaId,
    ugrp: userGroupCode,
    role: 'god',
    toWho: 'Dt5mvrtU'
  })
}


export async function userRoleTest(token, duaId) {

  let data = await queryUserRoleTest(token, duaId)
  console.log('queryUserRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

  data = await createUserRoleTest(token, duaId)
  console.log('createUserRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

  data = await editUerRoleTest(token, duaId)
  console.log('editUerRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

  data = await getUserRoleTest(token, duaId)
  console.log('getUserRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

}