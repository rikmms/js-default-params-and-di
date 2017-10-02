const defaultUsersRepo = require('./users-repository')
module.exports = (usersRepo = defaultUsersRepo) => {
  return {
    create: user =>  { 
      if (!user.username || !user.email || !user.hashPassword || user.hashPassword.length < 8) 
        return false
      
      usersRepo.create(user)
      return true
    },
    read: username => usersRepo.read(username)
  }
}