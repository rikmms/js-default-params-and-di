const assert = require('assert')
const users = require('./users')

assert(users.create({username: 'bob', email: 'example@example.com', hashPassword: 'A$%Hsdf&/F'}))

const user = users.read('bob')
assert(user)
assert.equal(user.username, 'bob')
assert.equal(user.email, 'example@example.com')
assert.equal(user.hashPassword, 'A$%Hsdf&/F')

assert(!users.create({username: 'bob', hashPassword: 'A$%Hsdf&/F'}))
assert(!users.create({username: 'bob', email: 'example@example.com', hashPassword: 'HHR$'}))