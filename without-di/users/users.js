const usersRepo = require('./users-repository')

exports.create = user =>  {
  if (!user.username || !user.email || !user.hashPassword || user.hashPassword.length < 8) 
    return false

  usersRepo.create(user)
  return true
}

exports.read = username => usersRepo.read(username)