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
const ugrp = '0Ve0aLTh'

export async function getUserGroupTest(token) {
  return getUserGroup({
    // token,
    ugrp,
  })
}

export async function createUserGroupTest(token, user_id) {
  return createUserGroup({
    token,
    bywho: user_id,
    code,
    name: 'chenxi-test create',
    avatar: avatar1,
    brief: 'chenxi-test create brief',
  })
}

export async function deleteUserGroupTest(token) {
  return deleteUserGroup({
    token,
    ugrp,
  })
}

export async function editUserGroupTest(token) {
  return editUserGroup({
    token,
    ugrp,
    name: 'chenxi-test edit',
    avatar: avatar2,
    brief: 'chenxi-test edit brief',
  })
}

export async function queryUserGroupTest(token) {
  return queryUserGroup({
    token,
    name: 'chenxi'
  })
}

