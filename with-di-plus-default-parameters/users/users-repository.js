const users = new Map()
exports.create = user => users.set(user.username, user)
exports.read = username => users.get(username)