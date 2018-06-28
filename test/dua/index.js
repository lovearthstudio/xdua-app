import { getDuaIdFromServer, initializeDuaId } from '../../src/api/methods/dua'

// getDuaId().then(
//   res => console.log(res)
// ).catch(
//   err => console.log(err)
// )


initializeDuaId().then(
  res => console.log(res)
).catch(
  err => console.log(err)
)