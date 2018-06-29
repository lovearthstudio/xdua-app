import {
  queryRole,
  getRole,
} from '../../src/api/methods/role'

const userGroupId = 'Ro4a2u9d'

export async function queryRoleTest(token) {
  return queryRole({
    token,

  })
}


export async function roleTest(token) {

  let data = await queryRoleTest(token)
  console.log('queryRoleTest Test')
  console.log(data)
  console.log('------------------------------------')

}