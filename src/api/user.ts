import request from './request'

const getUser = () => {
  return request.get('/v4/users/me')
}
export {
  getUser
}
