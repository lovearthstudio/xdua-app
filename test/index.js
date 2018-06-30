import { getDuaIdFromServer } from '../src/api/methods/dua'
import { loginTest } from './login'
import {
  createUserGroupTest,
  editUserGroupTest,
  deleteUserGroupTest,
  getUserGroupTest,
  queryUserGroupTest,
} from './usergroup'
import {
  roleTest,
} from './role'
import  {
  signUpByPhoneTest,
  resetPasswordByPhoneTest,
  setUpUserTest,
  getUserTest,
  queryUserTest,
  getVfcodeByPhoneTest,
  getVfcodeByMailWhenSignUpTest
} from './user'


async function demo() {
  let data = await getDuaIdFromServer()
  let duaId = data.id

  // data = await getVfcodeByMailWhenSignUpTest(duaId)
  // console.log('getVfcodeByMailWhenSignUp Test')
  // console.log(data)
  // console.log('------------------------------------')

  // data = await signUpByPhoneTest(duaId, vfcode)
  // console.log('signUp Test')
  // console.log(data)
  // console.log('------------------------------------')

  // data = await getVfcodeByPhoneTest(duaId)
  // console.log('getVfcodeByPhone Test')
  // console.log(data)
  // console.log('------------------------------------')

  data = await loginTest(duaId)
  console.log('login Test')
  console.log(data)
  console.log('------------------------------------')
  // duaId = data['dua_id']

  let { token, user_id } = data

  data = await resetPasswordByPhoneTest(token, duaId, user_id)
  console.log('resetPasswordTest Test')
  console.log(data)
  console.log('------------------------------------')

  // data = await setUpUserTest(token, duaId, user_id)
  // console.log('setUpUserTest Test')
  // console.log(data)
  // console.log('------------------------------------')

  // data = await queryUserTest(token, duaId)
  // console.log('queryUserTest Test')
  // console.log(data)
  // console.log('------------------------------------')

  // data = await getUserTest(token, duaId, user_id)
  // console.log('getUserTest Test')
  // console.log(data)
  // console.log('------------------------------------')

  // data = await createUserGroupTest(token, duaId, user_id)
  //
  // console.log('createUserGroupTest Test')
  // console.log(data)
  // console.log('------------------------------------')
  //
  // data = await queryUserGroupTest(token, duaId)
  //
  // console.log('queryUserGroup Test')
  // console.log(data)
  // console.log('------------------------------------')
  //
  // data = await getUserGroupTest(token, duaId)
  //
  // console.log('getUserGroupTest Test')
  // console.log(data)
  // console.log('------------------------------------')
  //
  // data = await editUserGroupTest(token, duaId)
  //
  // console.log('editUserGroupTest Test')
  // console.log(data)
  // console.log('------------------------------------')
  //
  // data = await deleteUserGroupTest(token, duaId)
  //
  // console.log('deleteUserGroupTest Test')
  // console.log(data)
  // console.log('------------------------------------')

  // await roleTest(token, duaId)
}

demo()