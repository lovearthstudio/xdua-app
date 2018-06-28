import { login } from '../../src/api/methods/login'

export async function loginTest() {
  return login({
    username: '15810419011',
    password: '123abc',
  })
}
