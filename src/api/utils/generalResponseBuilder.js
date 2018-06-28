
export function generalResponseBuilder(res) {
  const { data } = res

  if (data.status === 0) {
    return data.result
  } else {
    console.log(data)
    throw new Error(data.reason)
  }

}