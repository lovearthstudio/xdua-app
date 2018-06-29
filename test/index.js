import { initializeDuaId } from '../src/api/methods/dua'
import { loginTest } from './login'
import {
  createUserGroupTest,
  editUserGroupTest,
  deleteUserGroupTest,
  getUserGroupTest,
  queryUserGroupTest,
} from './usergroup'

initializeDuaId().then(
  async function() {
    let data = await loginTest()
    console.log('login Test')
    console.log(data)
    console.log('------------------------------------')

    let { token, user_id } = data

    // data = await createUserGroupTest(token, user_id)
    //
    // console.log('createUserGroupTest Test')
    // console.log(data)
    // console.log('------------------------------------')

    data = await queryUserGroupTest(token)

    console.log('queryUserGroup Test')
    console.log(data)
    console.log('------------------------------------')

    data = await getUserGroupTest(token)

    console.log('getUserGroupTest Test')
    console.log(data)
    console.log('------------------------------------')

    // data = await editUserGroupTest(token)
    //
    // console.log('editUserGroupTest Test')
    // console.log(data)
    // console.log('------------------------------------')
    //
    // data = await deleteUserGroupTest(token)
    //
    // console.log('deleteUserGroupTest Test')
    // console.log(data)
    // console.log('------------------------------------')


  }
)