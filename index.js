const os = require('node:os')
const http = require('node:http')
// const cors = require('cors')

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hello world')
})
console.log(`${os.platform()}`)

const port = process.env.PORT ?? 0
console.log(process.env)

server.listen(port, () => {
  console.log('Listening on: ', `http://localhost:${server.address().port}`)
})
