import {
  queryRole,
  getRole,
  editRole,
  createRole,
} from '../../src/api/methods/role'

const userGroupId = 'Ro4a2u9d'

export async function queryRoleTest(token, duaId) {
  return queryRole({
    token,
    duaId,
  })
}

export async function editRoleTest(token, duaId) {
  return editRole({
    token,
    duaId,
    roleId: 'h9oC8yTT',
    name: '会员edit test',
  })
}

export async function getRoleTest(token, duaId) {
  return queryRole({
    token,
    duaId,
    name: 'chenxi-test-role-name'
  })
}

export async function createRoleTest(token ,duaId) {
  return createRole({
    token,
    duaId,
    ugrp: 'wikicivi',
    code: 'chenxi_test_role',
    granter: 'root',
    name: 'chenxi-test-role-name',
  })
}


export async function roleTest(token, duaId) {

  let data = await queryRoleTest(token, duaId)
  console.log('queryRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

  // data = await editRoleTest(token, duaId)
  // console.log('editRoleTest Test')
  // console.log(data)
  // console.log('------------------------------------')
  data = await createRoleTest(token, duaId)
  console.log('createRoleTest Test')
  console.log(data)
  console.log('------------------------------------')


  // data = await getRoleTest(token, duaId)
  // console.log('getRoleTest Test')
  // console.log(data)
  // console.log('------------------------------------')


}