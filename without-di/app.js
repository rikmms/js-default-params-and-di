const users = require('./users')

if (!users.create({username: process.env.USERNAME, email: process.env.EMAIL, hashPassword: process.env.HASH_PASSWORD}))
  throw new Error('Invalid user\'s information')

console.log(users.read(process.env.USERNAME))