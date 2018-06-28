let apiEndPoint

if (process.env.NODE_ENV === 'production') {
  apiEndPoint = process.env.API_END_POINT
} else {
  apiEndPoint = 'http://www.xdua.com/'
}

export const API_END_POINT = apiEndPoint