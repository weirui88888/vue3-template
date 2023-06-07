import request from './request'

interface User {
  name: string
  bio: string
  id: string
}

export const getUser = () => {
  return request.get<User>('/v4/users/me')
}
