import {
  signUp,
  resetPassword,
  setUpUser,
  queryUser,
  getUser,
} from '../../src/api/methods/user'

import {
  getVfcodeByPhone,
  getVfcodeByMailWhenSignUp,
} from "../../src/api/methods/vfcode";

const phoneNumber = '15821000650'
const email = 'pc21000650@126.com'

export async function getVfcodeByPhoneTest(duaId) {
  return getVfcodeByPhone({
    duaId,
    username: phoneNumber
  })
}

export async function getVfcodeByMailWhenSignUpTest(duaId) {
  return getVfcodeByMailWhenSignUp({
    duaId,
    username: email,
  })
}

export async function signUpByPhoneTest(duaId, vfcode) {
  return signUp({
    duaId,
    username: phoneNumber,
    password: '123abc',
    vfcode,
    byPhone: true
  })
}

export async function signUpByMailTest(duaId, vfcode) {
  return signUp({
    duaId,
    username: email,
    password: '123abc',
    vfcode,
    byPhone: false
  })
}

export async function resetPasswordByPhoneTest(token, duaId, user_id) {
  return resetPassword({
    token,
    duaId,
    username: '15821000650',
    password: '123abc',
    oldPassword: 'abc123',
    vfcode: '984141',
    user_id,
    byPhone: true
  })
}

export async function setUpUserTest(token, duaId, user_id) {
  return setUpUser({
    token,
    duaId,
    user_id,
    saying: 'setSaying',
    sex: 'U',
    bday: 19870808,
    avatar: 'setAvatar',
    brief: 'setBrief',
  })
}

export async function queryUserTest(token, duaId) {
  return queryUser({
    token,
    duaId,
    name: 'chenxi',
  })
}

export async function getUserTest(token, duaId, user_id) {
  return getUser({
    token,
    duaId,
    user_id,
  })
}