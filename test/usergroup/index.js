import {
  getUserGroup,
  createUserGroup,
  deleteUserGroup,
  editUserGroup,
  queryUserGroup
} from '../../src/api/methods/userGroup'

const code = 'lkfasdjflkasjf'
const avatar1 = 'http://res.cloudinary.com/dw5ab4upj/image/upload/v1520473318/izqj1p1lovupo7a1lqck.png'
const avatar2 = 'http://res.cloudinary.com/dw5ab4upj/image/upload/v1520473392/wxykhlcmzzqna3w7agfz.png'
const userGroupId = 'Mwdo0zdF'

export async function getUserGroupTest(token, duaId) {
  return getUserGroup({
    token,
    duaId,
    userGroupId,
  })
}

export async function createUserGroupTest(token, duaId, user_id) {
  return createUserGroup({
    token,
    duaId,
    bywho: user_id,
    code,
    name: 'chenxi-test create',
    avatar: avatar1,
    brief: 'chenxi-test create brief',
  })
}

export async function deleteUserGroupTest(token, duaId) {
  return deleteUserGroup({
    token,
    duaId,
    userGroupId,
  })
}

export async function editUserGroupTest(token, duaId) {
  return editUserGroup({
    token,
    duaId,
    userGroupId,
    name: 'chenxi-test edit',
    avatar: avatar2,
    brief: 'chenxi-test edit brief',
  })
}

export async function queryUserGroupTest(token, duaId) {
  return queryUserGroup({
    token,
    duaId,
    name: 'chenxi'
  })
}

