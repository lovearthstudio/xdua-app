import {
  queryRole,
  getRole,
} from '../../src/api/methods/role'

const userGroupId = 'Ro4a2u9d'

export async function queryRoleTest(token, duaId) {
  return queryRole({
    token,
    duaId,
    ugrp: 'calathus',
  })
}


export async function roleTest(token, duaId) {

  let data = await queryRoleTest(token, duaId)
  console.log('queryRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

}